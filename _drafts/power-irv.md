---
layout: post
title:  "Power IRV, or: How I Learned to Stop Worrying and Love Ranked Choice Voting"
author: brucek
categories: voting
---
Politics sucks.  People are shouting past each other rather than reaching for common ground and commonsense solutions.

One thing that especially sucks is the "First Past the Post" (FPTP) voting system.  One man one vote woohoo!

Umm, no.  If you don't know about the many problems with FPTP, watch this video from CGP Grey:

{% include youtube.html id="3Y3jE3B8HsE" %}

He basically walks through the problems and the easy-to-understand solution:  Instant Runoff Voting (IRV) - he calls it "the Alternative Vote" (totally *not* confusing), but they are the same thing.

OK, so either you watched the video, or you want me to give you the 411 here because who watches videos really - [ain't nobody got time for that](https://youtu.be/bFEoMO0pc7k).

{:images: class="image-container"}
![I did my own research](/assets/images/didmyownresearch.png){:class="img-responsive" width="300px"}
![ain't nobody got time for that](/assets/images/angtft.jpg){:class="img-responsive" width="300px"}
{: images}

The long and the short of it is if you are sick of explaining to your 3rd-party friends that voting for Bernie Sanders, or Jo Jorgensen, or Howie Hawkins, or Vermin Supreme is just throwing away their vote and why can't you just get with the program and realize that your ideological purity isn't making a damn bit of difference.

{% include youtube.html id="mPqRirDphuc" %}
{:image-caption: class="image-caption" style="text-align: center;"}
Go ahead, throw your vote away
{: image-caption}

OK then - we should just switch over to IRV and everything's all good, right?

If only.

So election nerds like to argue about whose voting method is the biggest... alignment with voters' actual desires, which is most resistant to strategic voting and all sorts of other crazy criteria.

![Single-winner Voting Method Comparison Chart](/assets/images/voting_chart.png){:class="img-responsive"}
**Way more detail than needed for normal humans**  
<sub><sup>[chart and references are at [FairVote](https://archive3.fairvote.org/reforms/instant-runoff-voting/irv-and-the-status-quo/irv-versus-alternative-reforms/single-winner-voting-method-comparison-chart/), who are very hot for IRV as you can see]</sup></sub>
{: images}

This chart is a *little* misleading as it downplays a super annoying problem with IRV:

> IRV does not allow voters to always vote for their favorite no matter what, especially in the circumstances where it matters the most: when your honest favorite is just about to become a frontrunner.

That's also super not obvious, so let's go to another video - this time from the Center for Election Science which explains how our voting system (and IRV) can force you to **betray** your favourite candidate:

{% include youtube.html id="JtKAScORevQ" %}
I love this video.  **Definitely** watch this one.
{: image-caption}

The problem is basically a result of something called the ["center squeeze" effect](https://electionscience.org/library/the-center-squeeze-effect/) - basically:

* a broadly appealing centrist
* can be defeated 
* if squeezed from both sides
* by candidates who absorb most of the support from the ends of the political spectrum

![The “Center Squeeze” Effect](/assets/images/center_squeeze_effect_diagram.png){:class="img-responsive"}
{: images}

In this case:
* `R` has **just** passed `C` in popularity
* but because more `C` voters prefer `L` to `R`
* `L` will win
* despite `C` being the best choice overall

{:small: style="font-size: small;"}
(We just asserted that more `C` voters prefer `L` to `R` to match the layout of the Center for Election Science video)
{: small}

And IRV was so promising.  **Ugh.**  OK, so what do we do now?

This is about the time when usually Approval Voting junkies all jump up to talk about [why Monotonicity is sooooo important](https://electowiki.org/wiki/Monotonicity#2009_Burlington.2C_Vermont_mayoral_election) and how their method never suffers from [Favorite Betrayal](https://electowiki.org/wiki/Favorite_betrayal_criterion) and so we should just shut up and get down with the APP.

![The state of voting reform](/assets/images/distracted_voters.png){:class="img-responsive" width="500px"}
{: images}

{:center: style="text-align: center;"}
# Nope!  Bye Felicia
{: center}

![WTF is Power IRV?](/assets/images/power_skeptical.png){:class="img-responsive" width="300px"}
{: images}

## YES.
{: center}

# Sorry, Approval Voting:  Power IRV is the New Hotness
{: center}

Let's take a look: Power IRV works exactly like regular IRV *until you get down to the last 3 finalists*.

At this point we have to do something to fix the center squeeze issue, which was the killer for regular IRV.  How do we discover and fix that scenario?

#### Power to the rescue

So we probably could have called this "IRV + Pairwise Finalists" or something, but what fun is that?  POWER.

OK anyways - the trick is to just pick the winner from the 3 finalists by finding what is called the [Condorcet winner](https://youtu.be/bXYQPvU_Oao):

* run elections between each pair of candidates
* if anyone beats both other candidates head-to-head:  congrats!  You win!

# But I thought the Condorcet method doesn't always work?

Wait, what are you, some kind of electo-nerd?  OK, ok, ok, you're right - that's totally true.  The Condorcet method **doesn't** always work.  What?!?!  How's that?

Sometimes there **is no** Condorcet winner.  

It's pretty easy to understand, actually.  Imagine 3 candidates, and it turns out that voters prefer A over B, B over C and C over A (so it's a loop!).  Bummer.

![The Condorcet Paradox](/assets/images/condorcet_paradox.png){:class="img-responsive" width="300px"}
{: images}

But wait - it's OK!  We can fix this too (and in a pretty logical way).  We just throw in a little twist - if we have no clear head-to-head winner, let's:

* tally up the votes in each race<sup>*</sup> (so 3 sets of head-to-head totals)
* whoever has the highest vote count in any race wins<sup>**</sup>

The idea is that by running the 3 pairwise elections and taking the highest total count, we will pick the best coalition-builder.  If one of the candidates were to drop out, who can build the strongest coalition including their supporters?

This is the trick to fixing the center squeeze problem - if either of the regular IRV losers can combine forces to defeat a center-squeezed winner, they should win - and by taking the highest vote total overall, you can see which coalition has the greatest overall support.

\* In case a voter only ranked 1 of the last 3, we just split their vote and count it 1/2 for **both** when their only choice is removed since they gave us no preference
{: small}

\** We do have to worry about a super-rare 2-way tie, but guess what?  We just found the pairwise winner for that scenario too 😉
{: small}

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

Cool, huh?  (Well, OK - the problems with IRV are not so cool.)

Anyways, now go back and see what happens with Power IRV - try dragging the voters ![Voters](/assets/images/ballot/voters.png){:height="20px"} up again after you click on the `PowerIRV` button.  Go ahead.  We'll wait.

(You can also push `reset` if you moved too many things around)

Did you see how Power IRV's minor tweak with the final 3 candidates made all the difference and solved the problems we saw with normal IRV?

![Yeah you did](/assets/images/yeah_you_did.png){:class="img-responsive" width="300px"}
{: images}

## Nice.

OK, so what other scenarios come up that go all pear-shaped under other voting methods?

The second-most popular alternative to FPTP is called the Borda Count.  You simply take a ranked ballot and add up the rank numbers. Like in golf, whoever has the lowest score, wins.

# The Borda Reverse Spoiler

In this next simulation, you move a losing candidate closer to another losing candidate. Under FPTP, the spoiler effect would split their votes, making both of them lose even more. But watch what happens under Borda Count instead...

drag ![Henry Hexagon](/assets/images/ballot/hexagon.png){:height="20px"} to just slightly left of ![Suzy Square](/assets/images/ballot/square.png){:height="20px"}:
{: caption}
{% include iframe.html url="/play/election3.html" %}
{: election}

Did you see where Borda Count had a reverse spoiler effect? Instead of one good candidate hurting another good candidate by moving closer, with Borda Count, one bad candidate can help another bad candidate by moving closer.

Did you try with Power IRV?  If not, go for it.

(Spoiler alert:  voters DGAF about your crappy hexagon candidate's antics.)

![Aww yiss](/assets/images/aw-yiss.png){:class="img-responsive" width="300px"}
{: images}

Now let's do a little rewind and look at some revisionist history with the 2016 election.  Let's imagine that instead of FPTP we had rocked it out with Power IRV.

By using Power IRV, we **totally** remove the spoiler effect - and this means that Bernie could have also run in the general election without risking Hillary's chances.

# Bring Bernie Back

Let's see what would have happened if Bernie could have run as a 3rd candidate.  Feel free to move him around if you think his appeal lands somewhere else in the ideological landscape:

a guesstimated model of the 2016 US election?
{: caption}
how Clinton ![Four Square Hillary](/assets/images/ballot/square.png){:height="20px"} ties Approval and IRV, Trump ![Trumpagon](/assets/images/ballot/hexagon.png){:height="20px"} wins FPTP and Score, and Sanders ![Triangle Bernie](/assets/images/ballot/triangle.png){:height="20px"} wins Power IRV:

{% include iframe.html url="/play/election5.html" %}
{: election}

You might notice that things got weird here with Power IRV if you leave Clinton ![Four Square Hillary](/assets/images/ballot/square.png){:height="20px"} and Trump ![Trumpagon](/assets/images/ballot/hexagon.png){:height="20px"} alone and just move Sanders ![Triangle Bernie](/assets/images/ballot/triangle.png){:height="20px"} around the bottom edge of the map.

Clinton ![Four Square Hillary](/assets/images/ballot/square.png){:height="20px"} can win just by moving Sanders ![Triangle Bernie](/assets/images/ballot/triangle.png){:height="20px"} to the left way down there at the bottom!  What the heck, I thought you said this Power IRV thing didn't have any weird problems?!?!

# Chill, homie

This is weird only because Clinton ![Four Square Hillary](/assets/images/ballot/square.png){:height="20px"} and Trump ![Trumpagon](/assets/images/ballot/hexagon.png){:height="20px"} are **exactly** tied between each other:

![Trumpagon](/assets/images/ballot/hexagon.png){:height="20px"} vs ![Four Square Hillary](/assets/images/ballot/square.png){:height="20px"}: tied at 58
{: caption}

If Trump ![Trumpagon](/assets/images/ballot/hexagon.png){:height="20px"} were a little bit closer and could pull a few voters from the Democrat block (or vice versa), this problem goes away - it's just because our voter model is super simple and we have **exactly** the same number of votes in a head-to-head with Trump ![Trumpagon](/assets/images/ballot/hexagon.png){:height="20px"} vs Clinton ![Four Square Hillary](/assets/images/ballot/square.png){:height="20px"}, something that is astronomically unlikely in any real contest.

{:election: class="sim-test"}
move Sanders ![Triangle Bernie](/assets/images/ballot/triangle.png){:height="20px"} along the bottom edge and see that Power IRV works just fine
{: caption}

{% include iframe.html url="/play/election6.html" %}
{: election}

## Convinced yet?

Yeah you are.  Tell your friends, tell your Congresspeople, push for Power IRV in your local elections and with voting reform organizations such as [FairVote](https://www.fairvote.org/).

Or if you're still not there, I'd love to hear from you.  Drop me an email at the address at the bottom of the page with "Power IRV" somewhere in the subject and let's talk.

Meanwhile, my fingers are crossed 🤞 that this idea gets us one step closer again towards our more Perfect Union.

Oh, the audacity..!  😉

Be well, my friends.