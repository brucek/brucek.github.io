---
layout: post
title:  "Power IRV (appendix), or: How I Learned to Stop Worrying and Love Ranked Choice Voting"
description: "This small tweak to Instant Runoff Voting makes Power IRV the clear winner in the voting reform sweepstakes"
image:
path: /assets/images/ballot/inline/distracted_voters.png
height: 662
width: 988
author: brucek
categories: voting
---

This is a small followup and the last of this 4-part series on voting reform:

- [Power IRV (part 1)](power-irv-pt1.html) - Intro: Why Dropping First-Past The Post Voting is the Right Move Now
- [Power IRV (part 2)](power-irv-pt2.html) - Power IRV: The best alternative to FPTP
- [Power IRV (part 3)](power-irv-pt3.html) - Why Power IRV beats out all other voting systems
- [Power IRV (part 4)](power-irv-pt4.html) - Appendix:  FAQs and Followups

If you're not sure what our current FPTP voting system is or why it needs to go, get your learn on with [Power IRV (part 1)](power-irv-pt1.html).

If you didn't get the rundown on what Power IRV is and how it works, get a quick overview in [Power IRV (part 2)](power-irv-pt2.html).

The meaty bit is in [Power IRV (part 3)](power-irv-pt3.html) - at a minimum read this if you haven't already.

# FAQs and Followups

This is a list of FAQs and followups for completeness with a other voting methods and questions we didn't get to in [Power IRV (part 3)](power-irv-pt3.html).

# Some Power IRV walkthroughs and examples

Let's run through a few scenarios to get the feel of exactly how Power IRV works in practice.

### Normal Situation

We're going to use a ballot shorthand here - if I have a line that says:

    27:C>B>A

that means that we have:
* **27** voters (first number)
* who all ranked Candidate C first, then B, and A last (`C>B>A`)

Let's say the final 3 round comes down to:

    27:C>B>A
    17:C>A>B
    31:A>C>B

{:small: style="font-size: small;"}
(So 27 + 17 + 31 = 75 total voters)
{: small}

Check for yourself, but C is the Condorcet winner (wins pairwise contests against both A and B), and so is the Power IRV winner.

### Center Squeeze

Now let's say the final 3 round comes down to:

    27:A>B>C
    37:C>B>A
    15:B>C>A

Under regular IRV, we would now drop B with the least number of first-place votes and C winds up as the winner (since the 15 B votes move to their second choice, C), resulting in:

* C: 52 final votes, winning over
* A: 27 final votes

With Power IRV, we eliminate each candidate (left column) and record the first-place votes in the resulting head-to-head contests:

|  eliminate (below <sub>**vvv**</sub>) &nbsp;&nbsp;&nbsp;&nbsp; results -->  | &nbsp;&nbsp;&nbsp;&nbsp; A &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; B &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; C &nbsp;&nbsp;&nbsp;&nbsp; |
|:---:|:---:|:---:|:---:|
|  remove candidate A  |  - |  42  |  37  |
|  remove candidate B  |  27 |  - |  52  |
|  remove candidate C  |  27 |  52  | -  |

* eliminate A:
    * B gets 42 first-place votes and C gets 37 (first row)
* eliminate B:
    * A gets 27 first-place votes and C gets 52 (second row)
* eliminate C:
    * A gets 27 first-place votes and B gets 52 (third row)

In this case again, we have a Condorcet winner in B (ie B wins head-to-head against **both** A and C) - who would have lost to C under regular IRV.  

### Power IRV differs from many other Condorcet tiebreakers

There are **sooo many** other Condorcet cycle winner selection methods - I have been digging through docs across the wide, wild Internet and (oddly) have yet to find something that seems to match our "what do do when you get to the final 3" round (and you can't pick a winner due to a Condorcet cycle).

Let's compare even more voting methods (from this [Comparison of preferential electoral systems](https://en.wikipedia.org/wiki/Tideman_alternative_method#Comparison_table)):

{:images: class="image-container"}
![Comparison of preferential electoral systems](/assets/images/ballot/inline/preferential_comparison.png){:class="img-responsive"}
{: images}
Power IRV looking Real Good in there
{: image-caption}

For a minute I thought Power IRV might just be a renaming of the Schulze method, but see the next section for the reasoning why that's not the case.  Here are [a bunch more Condorcet cycle-breakers](http://www.cs.angelo.edu/~rlegrand/rbvote/desc.html) that I also looked at but couldn't find any match.

There are a number of other approaches [you can test live](http://www.cs.angelo.edu/~rlegrand/rbvote/calc.html) courtesy of Prof. Rob LeGrand.

Let's try this example:

    27:B>A>C
    27:C>B>A
    17:C>A>B
    31:A>C>B

Power IRV 

|  eliminate (below <sub>**vvv**</sub>) &nbsp;&nbsp;&nbsp;&nbsp; results -->  | &nbsp;&nbsp;&nbsp;&nbsp; A &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; B &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; C &nbsp;&nbsp;&nbsp;&nbsp; |
|:---:|:---:|:---:|:---:|
|  remove candidate A  |  - |  27  |  **75**  |
|  remove candidate B  | 58  |  - |  44  |
|  remove candidate C  | 48  |  54  | -  |

* when we eliminate candidate A, B gets 27 first-place votes and C gets 75 (first row)
* when we eliminate candidate B, A gets 58 first-place votes and C gets 44 (second row)
* when we eliminate candidate C, A gets 48 first-place votes and B gets 54 (third row)

Now let's check:
1. there is no Condorcet winner
  * A beats C
  * C beats B
  * B beats A<br/><br/>
2. The winner with the strongest coalition is **C** (when A is removed: 75 votes), so C is the winner<br/><br/>
  
Let's see what other methods say.  If you copy the  into the "Enter ranked ballots" box and click "Calculate all winners", you will see (I'm leaving out the random selections):

Only these methods choose C:
* Black
* Borda
* Carey

most Condorcet tiebreaker rules choose A?
* Baldwin
* Coombs
* Dodgson
* Hare
* Nanson
* Raynaud
* Schulze
* Simpson
* Tideman

I haven't been able to figure out yet if there is hard logic behind why these methods *should* choose the winner they do - Power IRV has clear logic that seems to make intuitive sense (the strongest coalition possible should win) when there is no clear winner.

# Score Voting Variants

There are a few other variants on the Score Voting theme that bear mentioning - the two top variants are:

* [STAR Voting](https://www.starvoting.us/) - "Score Then Automatic Runoff".  As you might have guessed, you take the 2 top-rated candidates and then the candidate preferred by the most voters wins.

This helps prevent strategic bullet voting since your vote only counts in the runoff stage if you have a preference (which would only happen if your top candidate made it in under a bullet strategy).

STAR Voting has the same issues as Score but it **also** fails the [Independence of Clones](https://en.wikipedia.org/wiki/Independence_of_clones_criterion) criterion:  the winner must not change due to the addition of a non-winning candidate who is similar to a candidate already present.

* [3-2-1 Voting](https://electowiki.org/wiki/3-2-1_voting) - Effectively Score voting with 3 choices:  Good, OK, and Bad.  To tally:
    * Take the top 3 "Good" vote winners
    * Take the top 2 with the least "Bad" votes
    * Choose 1 winner based on who was voted higher on more ballots

3-2-1 Voting has many good qualities, but it has an essential strategic voting flaw:  If there are few "Bad" votes overall, a few haters can tank an otherwise-popular winning candidate:
* 90% vote Good for A
* 5% vote Good for B and Bad for A
* 4% vote Good for C and Bad for A

==> A gets dropped in the "least Bad" round, leaving B as the winner (with only 5% of the vote!)

Effectively you force major parties into voting Good for themselves and Bad for the others, distorting many of the otherwise great benefits of this voting approach.


# Isn't Power IRV just IRV + the Schulze Method?

Not exactly.  Let's see why:

Let's start with what **is** the Schulze Method - there are [very complicated versions](https://en.wikipedia.org/wiki/Schulze_method) with more than 3 candidates but here is a simple explanation with only 3 alternatives:

{% include youtube.html id="7UqV3eN9Pa8" t="1194" %}

{:image-caption: class="image-caption" style="text-align: center;"}
Just be glad you didn't click on the full description.
{: image-caption}

There key difference:

* **Power IRV only cares about the highest single edge value**

Let's think about why.  First off, we know we:

* only have 3 candidates
* have a directed cycle (if not, we would have just picked the Condorcet winner)

Now let's update the example diagram here - you can see the winners picked with each different method:

![Schulze diagram ](/assets/images/ballot/inline/Schulze_diagram.png){:class="img-responsive" width="500px"}
{: images}
Schulze, why U no make sense?
{: image-caption}

#### <u>The Result</u>

* Schulze picks Greek
* Power IRV picks Potato

### The Logic

So Power IRV asks:
* If each of the candidates were removed
* Who could build the strongest coalition of the orphaned voters?

There are two ways to look at why this is:

1.  You can think of it just like running an extra IRV round, where you eliminate the weakest candidate.  Power IRV says that candidate is the one that results in the strongest remaining winner.

2.  The reality is that once you pick a winner, you eliminate **both** other candidates.  Therefore, there will be a defacto coalition of the winner plus voters who had them in second place.  We want the strongest combination to win.

We can also look at the Schulze winner:

* Greek beat Potato by 4
* Greek lost to Bean by 2

Now take the final IRV round angle.  The only way for Greek to win is if you drop Bean, and then Greek only has 12 voters in agreement.

If instead we had dropped Greek, Potato would have gotten 15 voters to endorse him - isn't that the outcome we'd rather have here?

Yes.  Yes it is.

# More good news:  Power IRV and DH3

The DH3 ["Dark Horse plus 3 rivals"](https://rangevoting.org/DH3Summ.html) pathology is where you have 3 strong candidates and one long shot.  Many voting systems have trouble here (Warren Smith claims that it affects "all(?) Condorcet systems based on full rank orderings"), but Power IRV does Just Fine since the dark horse is eliminated in the round of 4 finalists with the lowest top vote count.

There is no "DH2" scenario, since that would just wind up with one of the 2 major parties as the Condorcet winner (one will have more #1 votes and will therefore win).

