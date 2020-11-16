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

OK - all good, we should just switch over and everything's good, right?

If only.

So election nerds like to argue about whose voting method is the biggest... alignment with voters' actual desires, which is most resistant to strategic voting and all sorts of other crazy criteria.

![Single-winner Voting Method Comparison Chart](/assets/images/voting_chart.png){:class="img-responsive"}
**Way more detail than needed for normal humans**  
<sub><sup>[chart and references are at [FairVote](https://archive3.fairvote.org/reforms/instant-runoff-voting/irv-and-the-status-quo/irv-versus-alternative-reforms/single-winner-voting-method-comparison-chart/), who are very hot for IRV as you will see]</sup></sub>
{: images}

This chart is a *little* misleading as it downplays a super annoying problem with IRV:

> IRV does not allow voters to always vote for their favorite no matter what, especially in the circumstances where it matters the most: when your honest favorite is just about to become a frontrunner.

That's also super not obvious, so let's go to another video - this time from the Center for Election Science which explains [how our voting system (and IRV) betrays your favourite candidate](https://youtu.be/JtKAScORevQ).

It's basically a result of something called the ["center squeeze" effect](https://electionscience.org/library/the-center-squeeze-effect/) - basically:

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

<sub><sup>(We just asserted that more `C` voters prefer `L` to `R` to match the layout of the video)</sup></sub>

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

Sorry Approval Voting:  Power IRV is the New Hotness. Let's take a look:

So Power IRV works exactly like IRV *until you get down to the last 3 finalists*.

At this point we have to do something to fix the center squeeze issue, which was the killer for regular IRV.  How do we discover and fix that scenario?

#### Power to the rescue

So we probably could have called this "IRV + Pairwise Finalists" or something, but what fun is that?  POWER.

OK anyways - the trick is to just pick the winner from the 3 finalists by finding what is called the Condorcet winner:

* run elections between each pair of candidates
* if anyone beats both other candidates head-to-head:  congrats!  You win!

Here's where we add a small twist - sometimes there is **no** Condorcet winner.  What?!?!  How's that?

It's pretty easy to understand, actually.  Imagine 3 candidates, and it turns out that voters prefer A to B, B to C and C to A (so it's a loop!).  Bummer.

![The Condorcet Paradox](/assets/images/condorcet_paradox.png){:class="img-responsive" width="300px"}
{: images}

{:subtitle: style="text-align: center;margin-top: -40px;font-size: small;"}
{% include youtube.html id="bXYQPvU_Oao" %}
Glutton for punishment?  Here's way more Condorcet info than you'll ever need.
{: subtitle}

But wait - it's OK!  We can fix this too (and in a pretty logical way).  If we have no clear head-to-head winner, let's:

* tally up the votes in each race<sup>*</sup> (so 3 sets of head-to-head totals)
* whoever has the highest vote count in any race wins<sup>**</sup>

The idea is that by running the 3 pairwise elections and taking the highest total count, we will pick the best coalition-builder.  If one of the candidates were to drop out, who can build the strongest coalition including their supporters?

This is the trick to fixing the center squeeze problem - if either of the IRV losers can combine forces to defeat a center-squeezed winner, they should win - and by taking the highest vote total overall, you can see which coalition has the greatest overall support.

<sub><sup>* In case a voter only ranked 1 of the last 3, we just split their vote and count it 1/2 for **both** when their only choice is removed since they gave us no preference</sup></sub>  
<sub><sup>** We do have to worry about a 2-way tie, but guess what?  We just found the pairwise winner for that scenario too 😉</sup></sub>
