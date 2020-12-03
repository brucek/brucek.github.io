---
layout: post
title:  "Power IRV, or: How I Learned to Stop Worrying and Love Ranked Choice Voting (part 3)"
description: "This small tweak to Instant Runoff Voting makes Power IRV the clear winner in the voting reform sweepstakes"
image:
  path: /assets/images/ballot/inline/distracted_voters.png
  height: 662
  width: 988
author: brucek
categories: voting
---

This is the third of a 4-part series on voting reform:

- [Power IRV (part 1)](power-irv-pt1.html) - Intro: How to Escape the Two-Party Political Doom Loop
- [Power IRV (part 2)](power-irv-pt2.html) - Power IRV, or: How I Learned to Stop Worrying and Love Ranked Choice Voting
- [Power IRV (part 3)](power-irv-pt3.html) - Why Power IRV beats out all other voting systems (you are here)
- [Power IRV (part 4)](power-irv-pt4.html) - Appendix:  FAQs and Followups

If you're not sure what our current FPTP voting system is or why it needs to go, get your learn on with [Power IRV (part 1)](power-irv-pt1.html).

If you didn't get the rundown on what Power IRV is and how it works, get a quick overview in [Power IRV (part 2)](power-irv-pt2.html).

Otherwise, read on!

<br/>

-----------
<br/>

## Why Power IRV beats out all other voting systems

So election nerds like to argue about whose voting method is the biggest... alignment with voters' actual desires, which is most resistant to strategic voting and all sorts of other crazy criteria.

![Single-winner Voting Method Comparison Chart](/assets/images/ballot/inline/voting_chart.png)
{:class="img-responsive"}
{:images: class="image-container"}
**Way more detail than needed for normal humans**  
<sub><sup>[chart and references are at [FairVote](https://archive3.fairvote.org/reforms/instant-runoff-voting/irv-and-the-status-quo/irv-versus-alternative-reforms/single-winner-voting-method-comparison-chart/), who are very hot for IRV as you can see]</sup></sub>
{: images}

This chart is a *little* misleading as it downplays the super annoying problem with IRV that we saw in [Power IRV (part 2)](power-irv-pt2.html):

> IRV does not allow voters to always vote for their favorite no matter what, especially in the circumstances where it matters the most: when your honest favorite is just about to become a frontrunner.

As a reminder, this problem was the result of the ["Center Squeeze" effect](https://electionscience.org/library/the-center-squeeze-effect/) - where IRV throws out a broadly appealing centrist when choosing the final 2 candidates **just** as the advancing 3rd-party candidate becomes more popular than the centrist but not yet strong enough to defeat the other major-party opponent.

![The “Center Squeeze” Effect](/assets/images/ballot/inline/center_squeeze_effect_diagram.png){:class="img-responsive"}
{: images}

# And IRV was so promising...

**Ugh.**  OK, so what do we do now?

Let's look at the next most popular voting alternative: Approval Voting.  Here, instead of voting only for your favorite, you can vote for as many candidates as you like who you would approve to hold office:

![Approval sample ballot](/assets/images/ballot/inline/approval_ballot.png){:class="img-responsive" width="300px"}
{: images}
{:image-caption: class="image-caption" style="text-align: center;"}
What is Approval Voting? All voters vote for all candidates<br/>they find acceptable.  Count up all the votes - highest total wins.
{: image-caption}

While Approval Voting has many good qualities, it has two fatal flaws:

1.  You can't express your preference between approved candidates
  * you give the same vote to the one you love and the one you hold your nose for to prevent an even worse opponent from winning<br/><br/>
2.  It often devolves into strategic [bullet voting](https://www.fairvote.org/the_troubling_record_of_approval_voting_at_dartmouth) in practice
    * Bullet voting is where you vote highest for your favorite, and lowest for everyone else.
    * Why bullet vote?
        * voting for any non-favorite gives that other candidate a better chance of winning
        * voters are rewarded to strategically withhold votes from other strong contenders

![Bernie Bros](/assets/images/ballot/inline/bernie_bros.png){:class="img-responsive" width="300px"}
{: images}

Good luck convincing 2016 Bernie Bros to give the same vote to him and to Hillary.
{: image-caption}

For years, voting reform has been stuck between these two main factions:

* **Let's use IRV! YOLO!!**
  * I like to feel good by voting my preferences and getting to support my favorite the most
  * I don't know about IRV's center squeeze problem
  * I just want to do *anything* to get us unstuck here and IRV has that mainstream mojo

vs.

* **Approval voting is the move**
  * I am a voting nerd and know about IRV and favorite betrayal
  * I don't mind giving the same score to the candidate I love, the one I like, and the one I hold my nose for
  * I enjoy fighting an endless battle against people who can't possibly stomach voting the same for Hillary and Bernie

People get all excited about IRV, then they end up talking to the voting math people somewhere along the way, and they all push back on how IRV is terrible and if we're going to go through all the trouble to change, let's change to something that *actually* improves things significantly and all the initial excitement drains away like someone told them they're about to be stuck on an 8-hour car ride with a group of Crossfit vegan anti-vaxxers.

And then suddenly all the other voting method proponents swoop in and now you have a 6-way discussion that winds up with everybody giving up and just getting drunk instead.  And here we are.

![Greta is not amused](/assets/images/ballot/inline/amused_greta.jpg){:class="img-responsive" width="300"}
{: images}

Approval Voting proponents **do** have some good points, namely that [Monotonicity is important](https://electowiki.org/wiki/Monotonicity#2009_Burlington.2C_Vermont_mayoral_election) and how Approval Voting never suffers from [Favorite Betrayal](https://electowiki.org/wiki/Favorite_betrayal_criterion) - and so they argue we should just shut up and get down with the APP.

{:center: style="text-align: center;"}
# There is a better way
{: center}

![The state of voting reform](/assets/images/ballot/inline/distracted_voters.png){:class="img-responsive" width="500px"}
{: images}

# Sorry, Approval Voting:  Power IRV is the New Hotness

Let's review: Power IRV works exactly like regular IRV *until you get down to the last 3 finalists*.

At this point we have to do something to fix the center squeeze issue, which was the killer for regular IRV.  How do we deal with that?

#### Power to the rescue

So we probably could have called this "IRV + Pairwise Finalists", or "IRV with a Condorcet Nightcap" or something, but what fun is that?  POWER.

{:small: style="font-size: small;"}
(I didn't think calling it Condorcension was going to go very far either)
{: small}

OK anyways - whatever we call it, the trick is to just pick the winner from the 3 finalists by finding what is called the [Condorcet winner](https://youtu.be/bXYQPvU_Oao) (oh, **that's** where those names came from):

* first, run elections between each pair of candidates
* if anyone beats both both other candidates head-to-head:  congrats!  You win!

# But I thought the Condorcet method doesn't always work?

Wait, what are you, some kind of electo-nerd?  OK, ok, ok, yeah you're right - that's totally true.  Much like the rhythm method, the Condorcet method doesn't always work.

**What?!?!  How's that?**

Yes, Virginia:  sometimes there **is no** Condorcet winner.  

It turns out to be pretty easy to understand, actually.  Imagine 3 candidates, and now say that voters prefer A over B, B over C and C over A (so it's a loop!).  Bummer.

![The Condorcet Paradox](/assets/images/ballot/inline/condorcet_paradox.png){:class="img-responsive" width="300px"}
{: images}

But wait - it's OK!  We can fix this too (and in a pretty logical way).  We just throw in a little twist - if we have no clear head-to-head winner, let's:

* tally up the votes in each race<sup>*</sup> (so 3 sets of head-to-head totals)
* whoever has the highest vote count in any race wins<sup>**</sup>

The idea is that by running the 3 pairwise elections and taking the highest total count, we will pick the best coalition-builder.  If one of the candidates were to drop out, which of the others can build the strongest coalition including these orphaned supporters?

This is the trick to fixing the center squeeze problem - if either of the final 3 regular IRV losers can combine forces to defeat a center-squeezed winner, they should win - and by taking the highest vote total overall, you can see which coalition has the greatest overall support.

\* In case a voter only ranked 1 of the last 3 finalists, we just split their vote and count it 1/2 for **both** of the others when their only choice is removed (since they gave us no preference)
{: small}

\** We do have to worry about a super-rare 2-way tie, but guess what?  We just found the pairwise winner for that scenario too 😉
{: small}

(You can get even deeper into the specifics [in the Appendix](power-irv-pt4.html#some-power-irv-walkthroughs-and-examples))

## Let's Get Down To It

OK, so we've done a lot of talking, but can you get your hands dirty and try out this business?

## YES.
{: center}

Thanks to [a wonderful post](https://ncase.me/ballot/) by Nicky Case, we can go through an interactive exploration of different voting systems to compare how they work.  I've added a handful of his scenarios here, and also added in the Power IRV approach as a new option.  Check it out:

# Show me the squeeze

Here's the main case where basic Instant Runoff Voting runs into trouble. In the beginning, Tracy Triangle ![Tracy Triangle](/assets/images/ballot/triangle.png){:height="20px"} is already winning, and you're going to move the voters even closer to her. Obviously, if a candidate is already winning an election, and becomes even more popular, they should still win afterwards, right?

{:election: class="sim-test"}
{:caption: class="caption-test"}
drag the voters ![Voters](/assets/images/ballot/voters.png){:height="20px"} *slowly* up towards ![Tracy Triangle](/assets/images/ballot/triangle.png){:height="20px"}:
{: caption}
{% include iframe.html url="/play/election2.html" %}
{: election}

Cool, huh?

(Well, OK - except that the problems with IRV are decidedly *not* so cool.)
{: small}

Anyways, now let's go back and see what happens with Power IRV - try dragging the voters ![Voters](/assets/images/ballot/voters.png){:height="20px"} up again after you click on the `PowerIRV` button.  Go ahead.  We'll wait.

(You can also push `reset` if you moved too many things around)

Did you see how Power IRV's minor tweak with the final 3 candidates made all the difference and solved the problems we saw with normal IRV?

![Yeah you did](/assets/images/ballot/inline/yeah_you_did.png){:class="img-responsive" width="300px"}
{: images}

## Nice.

OK, so what other scenarios come up that go all pear-shaped under other voting methods but work out fine under Power IRV?

# Score Voting

After Approval Voting, the next-most popular method is Score Voting (aka Range Voting):

![Let's get rating!](/assets/images/ballot/inline/Score_Voting.png){:class="img-responsive" width="500px"}
{: images}

1.  Voters rate all candidates on a scale (usually 0-5, just like on Amazon or Yelp)
2.  All ratings are added up
3.  The candidate with the highest rating total wins

Like Approval Voting, Score Voting has a number of good qualities, but it too suffers from fatal flaws:

*  It fails the [Majority Criterion](https://en.wikipedia.org/wiki/Majority_criterion#Score_voting):  if one candidate is preferred by a majority (more than 50%) of voters, then that candidate must win

* It also fails:
  * [Later No Harm](https://en.wikipedia.org/wiki/Later-no-harm_criterion):  a voter giving a higher rating to a less-preferred candidate can not cause a more-preferred candidate to lose, and
  * [Participation](https://en.wikipedia.org/wiki/Participation_criterion):  abstaining from an election should never help a voter's preferred choice win
  
...but let's look for the intuitive place where Score Voting fails<sup>*</sup> - check out this scenario:

\* not to mention the whole "try and figure out how to rank everybody on a scale with too many choices" thing...  Did I get it right?  What if I scored these guys too close?  Or not close enough?  Now try that with 5 or 10 different candidates - good luck
{: small}

In this case 2/3 of voters dislike both candidates, but definitely dislike Square ![Suzy Square](/assets/images/ballot/square.png){:height="20px"}: much less. However, 1/3 of voters LOVE Triangle ![Tracy Triangle](/assets/images/ballot/triangle.png){:height="20px"} and HATE Square ![Suzy Square](/assets/images/ballot/square.png){:height="20px"}:.

Here, Score gives it to Triangle ![Tracy Triangle](/assets/images/ballot/triangle.png){:height="20px"}, while every *other* voting method says Square ![Suzy Square](/assets/images/ballot/square.png){:height="20px"}: should win.  Is Triangle ![Tracy Triangle](/assets/images/ballot/triangle.png){:height="20px"} the right answer?  It's very hard to argue that Triangle ![Tracy Triangle](/assets/images/ballot/triangle.png){:height="20px"} winning is a better outcome here - this is very clearly **not** "majority rule".  In fact, exactly the opposite - and thus why Score voting **fails** the Majority Criterion.

{:election: class="sim-test"}
should fanatics override a less-loved but more representative candidate?
{: caption}
{% include iframe.html url="/play/election7.html" %}
{: election}

# The Borda Reverse Spoiler

Another Score Voting variant is called the Borda Count.  You simply take a ranked ballot (from 1 to whatever) and add up the rank numbers for all ballots. Like in golf, whoever has the lowest score, wins.

In this next simulation, you move a losing candidate closer to another losing candidate. Under FPTP, the spoiler effect would split their votes, making both of them lose even more. But watch what happens under Borda Count instead...

drag ![Henry Hexagon](/assets/images/ballot/hexagon.png){:height="20px"} to just slightly left of ![Suzy Square](/assets/images/ballot/square.png){:height="20px"}:
{: caption}
{% include iframe.html url="/play/election3.html" %}
{: election}

Did you see where Borda Count had a reverse spoiler effect? Instead of one good candidate hurting another good candidate by moving closer, with Borda Count, one bad candidate can help another bad candidate by moving closer.

Did you try with Power IRV?  If not, go for it.

(Spoiler alert:  Power IRV DGAF about your crappy hexagon candidate's antics.)

![Aww yiss](/assets/images/ballot/inline/aw-yiss.png){:class="img-responsive" width="300px"}
{: images}

Now let's do a little rewind and look at some revisionist history with the 2016 election.  Let's imagine that instead of FPTP we had rocked it out with Power IRV.

By using Power IRV, we **totally** remove the spoiler effect - and this means that Bernie could have also run in the general election without risking Hillary's chances.

# Bring Bernie Back

Let's see what would have happened if Bernie could have run as a 3rd candidate:

a guesstimated model of the 2016 US election?
{: caption}
how
* Trump ![Trumpagon](/assets/images/ballot/hexagon.png){:height="20px"} wins FPTP (spoiler effect), IRV (center squeeze), and Approval (Sanders gets torpedoed by the ![Four Square Hillary](/assets/images/ballot/square.png){:height="20px"} Democratic party)
* Clinton ![Four Square Hillary](/assets/images/ballot/square.png){:height="20px"} wins Score, and 
* Sanders ![Triangle Bernie](/assets/images/ballot/triangle.png){:height="20px"} wins Borda, Condorcet, and Power IRV:

{% include iframe.html url="/play/election6.html" %}
{: election}

## What about other voting systems?

So to fight off the math harpies, let's go a little deeper here.  It turns out that in the worst case, regular IRV is about the same as FPTP(!) for reaching voter satisfaction, and it *can* be a little better.  But Approval voting is *much* better.

Here's a crazy chart [(source)](https://electology.org/tactical-voting-basics) showing the results of 2.2 million simulations. A huge variety of scenarios were tested. All-honest voters. All-strategic voters. Half-honest, half-strategic. Voters who know each others' preferences. Voters who don't know each others' preferences. Voters who only sorta-know each others' preferences. And so on.

You can tell that a real mathematician made this chart, because it makes your eyes bleed - the most important thing though is that blue bars further to the right are better:

![So much simulation](/assets/images/ballot/inline/simulation_comparison.png){:class="img-responsive"}
{: images}

It's clearly unfortunate as well that being a math dude he ranked the Simplicity axis on how simple it was for *him to compute*, and not how simple it is for *normal humans* to understand how to fill out their ballot.  I'm looking at you, Score Voting.

Anyways - I haven't done the math on this, but if good old Warren D. Smith ran Power IRV through his Bayesian Regret-ometer<sup>*</sup> and updated his chart

\* (what is Bayesian Regret?  It's like the computational inverse of happiness.  Yeah, go and [read up on that](https://www.rangevoting.org/BayRegDum.html) why don't you?  You'll get it *right away*)
{: small}

...I'd be willing to bet that we would find Power IRV beats out these other chump voting methods and we could finally build some consensus to actually *make a change* and dump this stupid FPTP voting BS once and for all:

![So much simulation](/assets/images/ballot/inline/bayesian_with_PIRV.png){:class="img-responsive"}
{: images}
Suck it Score Voting - and good luck rating every candidate from 0-100(!) anyways
{: image-caption}


## Convinced yet?

Yeah you are.  Let's do this.

Tell your friends, tell your Congresspeople, push for Power IRV in your local elections and with voting reform organizations such as [FairVote](https://www.fairvote.org/).

Or if you're still not there yet, I'd love to hear from you.  Drop me an email at the address at the bottom of the page with "Power IRV" somewhere in the subject and let's talk.

Meanwhile, my fingers are crossed 🤞 that this idea gets us one step closer again towards our more Perfect Union.

Oh, the audacity..!  😉

Be well, my friends.  Happy voting!

Still want more?  There's a few more notes and questions answered in
* [Power IRV - Appendix: FAQs and Followups (part 4)](power-irv-pt4.html)