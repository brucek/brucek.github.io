/****************************

SINGLETON CLASS on how to COUNT UP THE BALLOTS
and RENDER IT INTO THE CAPTION

*****************************/

var Election = {};

Election.score = function(model, options){

	// Tally the approvals & get winner!
	var tally = _tally(model, function(tally, ballot){
		for(var candidate in ballot){
			tally[candidate] += ballot[candidate];
		}
	});
	for(var candidate in tally){
		tally[candidate] /= model.getTotalVoters();
	}
	var winner = _countWinner(tally);
	var color = _colorWinner(model, winner);

	// NO WINNER?! OR TIE?!?!
	if(!winner){

		var text = "<b>NOBODY WINS</b>";
		model.caption.innerHTML = text;

	}else{

		// Caption
		var text = "";
		text += "<span class='small'>";
		text += "<b>highest average score wins</b><br>";
		for(var i=0; i<model.candidates.length; i++){
			var c = model.candidates[i].id;
			text += _icon(c)+"'s score: "+(tally[c].toFixed(2))+" out of 5.00<br>";
		}
		text += "<br>";
		text += _icon(winner)+" has the highest score, so...<br>";
		text += "</span>";
		text += "<br>";
		text += "<b style='color:"+color+"'>"+winner.toUpperCase()+"</b> WINS";
		model.caption.innerHTML = text;

	}

};

Election.approval = function(model, options){

	// Tally the approvals & get winner!
	var tally = _tally(model, function(tally, ballot){
		var approved = ballot.approved;
		for(var i=0; i<approved.length; i++) tally[approved[i]]++;
	});
	var winner = _countWinner(tally);
	var color = _colorWinner(model, winner);

	// NO WINNER?! OR TIE?!?!
	if(!winner){

		var text = "<b>NOBODY WINS</b>";
		model.caption.innerHTML = text;

	}else{

		// Caption
		var text = "";
		text += "<span class='small'>";
		text += "<b>most approvals wins</b><br>";
		for(var i=0; i<model.candidates.length; i++){
			var c = model.candidates[i].id;
			text += _icon(c)+" got "+tally[c]+" approvals<br>";
		}
		text += "<br>";
		text += _icon(winner)+" is most approved, so...<br>";
		text += "</span>";
		text += "<br>";
		text += "<b style='color:"+color+"'>"+winner.toUpperCase()+"</b> WINS";
		model.caption.innerHTML = text;

	}

};

Election.condorcet = function(model, options){

	var text = "";
	text += "<span class='small'>";
	text += "<b>who wins each one-on-one?</b><br>";

	var ballots = model.getBallots();

	// Create the WIN tally
	var tally = {};
	for(var candidateID in model.candidatesById) tally[candidateID] = 0;

	// For each combination... who's the better ranking?
	for(var i=0; i<model.candidates.length-1; i++){
		var a = model.candidates[i];
		for(var j=i+1; j<model.candidates.length; j++){
			var b = model.candidates[j];

			// Actually figure out who won.
			var aWins = 0;
			var bWins = 0;
			for(var k=0; k<ballots.length; k++){
				var rank = ballots[k].rank;
				if(rank.indexOf(a.id)<rank.indexOf(b.id)){
					aWins++; // a wins!
				}else{
					bWins++; // b wins!
				}
			}

			// WINNER?
			var winner = (aWins>bWins) ? a : b;
			tally[winner.id]++;

			// Text.
			var by,to;
			if(winner==a){
				by = aWins;
				to = bWins;
			}else{
				by = bWins;
				to = aWins;
			}
			text += _icon(a.id)+" vs "+_icon(b.id)+": "+_icon(winner.id)+" wins by "+by+" to "+to+"<br>";

		}
	}

	// Was there one who won all????
	var topWinner = null;
	for(var id in tally){
		if(tally[id]==model.candidates.length-1){
			topWinner = id;
		}
	}

	// Winner... or NOT!!!!
	text += "<br>";
	if(topWinner){
		var color = _colorWinner(model, topWinner);
		text += _icon(topWinner)+" beats all other candidates in one-on-one races.<br>";
		text += "</span>";
		text += "<br>";
		text += "<b style='color:"+color+"'>"+topWinner.toUpperCase()+"</b> WINS";
	}else{
		model.canvas.style.borderColor = "#000"; // BLACK.
		text += "NOBODY beats everyone else in one-on-one races.<br>";
		text += "</span>";
		text += "<br>";
		text += "THERE'S NO WINNER.<br>";
		text += "<b id='ohno'>OH NO.</b>";
	}

	// what's the loop?

	model.caption.innerHTML = text;

};

Election.borda = function(model, options){

	// Tally the approvals & get winner!
	var tally = _tally(model, function(tally, ballot){
		for(var i=0; i<ballot.rank.length; i++){
			var candidate = ballot.rank[i];
			tally[candidate] += i; // the rank!
		}
	});
	var winner = _countLoser(tally); // LOWER score is best!
	var color = _colorWinner(model, winner);

	// NO WINNER?! OR TIE?!?!
	if(!winner){

		var text = "<b>NOBODY WINS</b>";
		model.caption.innerHTML = text;

	}else{

		// Caption
		var text = "";
		text += "<span class='small'>";
		text += "<b>lower score is better</b><br>";
		for(var i=0; i<model.candidates.length; i++){
			var c = model.candidates[i].id;
			text += _icon(c)+"'s total score: "+tally[c]+"<br>";
		}
		text += "<br>";
		text += _icon(winner)+" has the <i>lowest</i> score, so...<br>";
		text += "</span>";
		text += "<br>";
		text += "<b style='color:"+color+"'>"+winner.toUpperCase()+"</b> WINS";
		model.caption.innerHTML = text;

	}

};

function powerIrvCondorcet(model, options, candidates=[]){

	var text = "";
	text += "<span class='small'>";
	text += "<b>who wins each one-on-one?</b><br>";

	// Create the WIN tally
	var tally = {};
	if (!candidates) candidates = Object.keys(model.candidatesById);

	for(var candidateID of candidates) {
		tally[candidateID] = {};
		for(var opponentID of candidates) {
			if (candidateID == opponentID) continue;
			tally[candidateID][opponentID] = 0;
		}
	}

	var topCount = 0;
	var topWinner = {};
	var ballots = model.getBallots();

	// For each combination... who's the better ranking?
	for(var i=0; i<candidates.length-1; i++){
		var a = candidates[i];
		for(var j=i+1; j<candidates.length; j++){
			var b = candidates[j];

			// Actually figure out who won in the pair.
			var aWins = 0;
			var bWins = 0;
			for(var k=0; k<ballots.length; k++){
				var rank = ballots[k].rank;
				if(rank.indexOf(a)<rank.indexOf(b)){
					aWins++; // a wins!
				}else{
					bWins++; // b wins!
				}
			}

			// Set the tallys
			tally[a][b] = aWins;
			tally[b][a] = bWins;

			// WINNER?
			if (aWins==bWins) {
				text += _icon(a) + " vs " + _icon(b) + ": tied at " + aWins + "<br>";
			} else {
				var winner = (aWins > bWins) ? a : b;

				// Text.
				var by, to;
				if (winner == a) {
					by = aWins;
					to = bWins;
				} else {
					by = bWins;
					to = aWins;
				}
				text += _icon(a) + " vs " + _icon(b) + ": " + _icon(winner) + " wins by " + by + " to " + to + "<br>";
			}

			// New top winner (or tie)?
			if (aWins > topCount) {
				topWinner = {[a]: aWins};
				topCount = aWins;
			}
			if (aWins == topCount) {
				topWinner[a] = aWins;
			}
			if (bWins > topCount) {
				topWinner = {[b]: bWins};
				topCount = bWins;
			}
			if (bWins == topCount) {
				topWinner[b] = bWins;
			}

		}
	}

	// See if we have a Condorcet winner
	var winCounts = {};
	var winners = [];
	for(var candidateID of candidates) {
		winCounts[candidateID] = 0;
		for(var opponentID of candidates) {
			if (candidateID == opponentID) continue;
			if (tally[candidateID][opponentID] > tally[opponentID][candidateID]) winCounts[candidateID]++;
			if (winCounts[candidateID] == 2) winners.push(candidateID);
		}
	}

	if (winners.length === 0) {
		// If there was a tie, can we break it?
		var keys = Object.keys(topWinner);

		if (keys.length === 2) {
			a = keys[0];
			b = keys[1];

			aWins = tally[a][b];
			bWins = tally[b][a];

			winners = [(aWins > bWins) ? b : a];
		} else if (keys.length === 1) {
			winners = [keys[0]];
		} else if (keys.length === 3) {
			winners = [keys[0]];
		}
	}

	return {
		finalWinner: winners[0],
		model: model,
		text: text
	};

};

function runIrv(model, options) {

	var origBallots = model.getBallots();

	var text = "";
	text += "<span class='small'>";

	var winners = [];
	var roundNum = 1;

	var candidates = [];
	for(var i=0; i<model.candidates.length; i++){
		candidates.push(model.candidates[i].id);
	}

	while(candidates.length > 1){

		text += "<b>round "+roundNum+":</b><br>";
		text += "who's voters' #1 choice?<br>";

		// Tally the approvals & get winner!
		var pre_tally = _tally(model, function(tally, ballot){
			var first = ballot.rank[0]; // just count #1
			tally[first]++;
		});

		// ONLY tally the remaining candidates...
		var tally = {};
		for(var i=0; i<candidates.length; i++){
			var cID = candidates[i];
			tally[cID] = pre_tally[cID];
		}

		// Say 'em...
		for(var i=0; i<candidates.length; i++){
			var c = candidates[i];
			text += _icon(c)+":"+tally[c];
			if(i<candidates.length-1) text+=", ";
		}
		text += "<br>";

		// Add the last place to the front of the winners list
		var loser = _countLoser(tally);
		winners.unshift(loser);
		text += "eliminate loser, "+_icon(loser);
		if (candidates.length > 2) text += ". next round!";
		text += "<br><br>";

		// ACTUALLY ELIMINATE
		candidates.splice(candidates.indexOf(loser), 1); // remove from candidates...
		// var ballots = model.getBallots();
		// for(var i=0; i<ballots.length; i++){
		// 	var rank = ballots[i].rank;
		// 	rank.splice(rank.indexOf(loser), 1); // REMOVE THE LOSER
		// }

		// And repeat!
		roundNum++;

	}

	winners.unshift(candidates[0]);
	text += "winner, "+_icon(candidates[0])+"!<br><br>";

	return {
		text: text,
		model: model,
		winners: winners
	}
}

Election.irv = function(model, options){

	var results = runIrv(model, options);
	var finalWinner = results.winners[0];

	var color = _colorWinner(results.model, finalWinner);
	results.text += "</span>";
	results.text += "<br>";
	results.text += "<b style='color:"+color+"'>"+finalWinner.toUpperCase()+"</b> WINS";
	results.model.caption.innerHTML = results.text;
};


Election.powerIrv = function(model, options){

	var results = runIrv(model, options);

	// Run the final 3 pairwise elections
	var winners = results.winners.slice(0, 3);

	var results = powerIrvCondorcet(model, options, winners);
	var finalWinner = results.finalWinner;

	var color = _colorWinner(results.model, finalWinner);
	results.text += "</span>";
	results.text += "<br>";
	results.text += "<b style='color:"+color+"'>"+finalWinner.toUpperCase()+"</b> WINS";
	results.model.caption.innerHTML = results.text;
};

Election.plurality = function(model, options){

	options = options || {};

	// Tally the approvals & get winner!
	var tally = _tally(model, function(tally, ballot){
		tally[ballot.vote]++;
	});
	var winner = _countWinner(tally);
	var color = _colorWinner(model, winner);

	// Caption
	var text = "";
	text += "<span class='small'>";
	if(options.sidebar){
		text += "<b>most votes wins</b><br>";
	}
	for(var i=0; i<model.candidates.length; i++){
		var c = model.candidates[i].id;
		if(options.sidebar){
			text += _icon(c)+" got "+tally[c]+" votes<br>";
		}else{
			text += c+": "+tally[c];
			if(options.verbose) text+=" votes";
			if(i<model.candidates.length-1) text+=", ";
		}
	}
	if(options.sidebar){
		text += "<br>";
		text += _icon(winner)+" has most votes, so...<br>";
	}
	text += "</span>";
	text += "<br>";
	text += "<b style='color:"+color+"'>"+winner.toUpperCase()+"</b> WINS";
	model.caption.innerHTML = text;

};

var _tally = function(model, tallyFunc){

	// Create the tally
	var tally = {};
	for(var candidateID in model.candidatesById) tally[candidateID] = 0;

	// Count 'em up
	var ballots = model.getBallots();
	for(var i=0; i<ballots.length; i++){
		tallyFunc(tally, ballots[i]);
	}
	
	// Return it.
	return tally;

}

var _countWinner = function(tally){

	// TO DO: TIES as an array?!?!

	var highScore = -1;
	var winner = null;

	for(var candidate in tally){
		var score = tally[candidate];
		if(score>highScore){
			highScore = score;
			winner = candidate;
		}
	}

	return winner;

}

var _countLoser = function(tally){

	// TO DO: TIES as an array?!?!

	var lowScore = Infinity;
	var winner = null;

	for(var candidate in tally){
		var score = tally[candidate];
		if(score<lowScore){
			lowScore = score;
			winner = candidate;
		}
	}

	return winner;

}

var _colorWinner = function(model, winner){
	if (Candidate.graphics[winner] === undefined) {
		console.log(winner);
		console.log(model);
		console.log(Candidate.graphics);
	}

	var color = (winner) ? Candidate.graphics[winner].fill : "";
	model.canvas.style.borderColor = color;
	return color;
}