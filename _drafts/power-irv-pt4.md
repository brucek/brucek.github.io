---
layout: post
title:  "Power IRV, or: How I Learned to Stop Worrying and Love Ranked Choice Voting (appendix)"
description: "This small tweak to Instant Runoff Voting makes Power IRV the clear winner in the voting reform sweepstakes"
image:
  path: /assets/images/ballot/inline/distracted_voters.png
  height: 662
  width: 988
author: brucek
categories: voting
---

This is a followup and the last of this 4-part series on voting reform:

- [Power IRV (part 1)](power-irv-pt1.html) - Intro: How to Escape the Two-Party Political Doom Loop
- [Power IRV (part 2)](power-irv-pt2.html) - Power IRV, or: How I Learned to Stop Worrying and Love Ranked Choice Voting
- [Power IRV (part 3)](power-irv-pt3.html) - Why Power IRV beats out all other voting systems
- [Power IRV (part 4)](power-irv-pt4.html) - Appendix:  FAQs and Followups (you are here)

If you're not sure what our current FPTP voting system is or why it needs to go, get your learn on with [Power IRV (part 1)](power-irv-pt1.html).

If you didn't get the rundown on what Power IRV is and how it works, get a quick overview in [Power IRV (part 2)](power-irv-pt2.html).

The meaty bit is in [Power IRV (part 3)](power-irv-pt3.html) - at a minimum read this if you haven't already.

# FAQs and Followups

This is a list of FAQs and followups for completeness with a other voting methods and questions we didn't get to in [Power IRV (part 3)](power-irv-pt3.html).

There's a lot of detail and math going on here, so don't feel like you need to dive in unless you're *really* into it.

I promise you you're not missing anything if you're not into the deep math and logic of voting systems and want to really look under the hood.

<br/>

-----------
<br/>

# Some Power IRV walkthroughs and examples

OK, now that's out of the way, let's run through a few scenarios to get the feel of exactly how Power IRV works in practice.

### 1. Normal Situation

We're going to use a ballot shorthand here - if I have a line that says:

    27:C>B>A

that means that we have:
* **`27`** voters (first number)
* who all ranked Candidate C first, then B, and A last: `C>B>A`

Let's say the final 3 round comes down to:

    31:A>C>B
    17:C>A>B
    27:C>B>A

{:small: style="font-size: small;"}
(So 27 + 17 + 31 = 75 total voters)
{: small}

Check for yourself, but C is the Condorcet winner (wins pairwise contests against both A and B), and so is the Power IRV winner.

### 2. Center Squeeze (simple)

Now let's say the final 3 round comes down to:

    27:A>B>C
    13:B>C>A
    35:C>B>A

Under regular IRV, we would now drop B with the least number of first-place votes and C winds up as the winner (since the 15 B votes move to their second choice, C), resulting in:

* C: 48 final votes, winning over
* A: 27 final votes

With Power IRV, we eliminate each candidate (left column) and record the first-place votes in the resulting head-to-head contests:

|  eliminate (below <sub>**vvv**</sub>) &nbsp;&nbsp;&nbsp;&nbsp; results -->  | &nbsp;&nbsp;&nbsp;&nbsp; A &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; B &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; C &nbsp;&nbsp;&nbsp;&nbsp; |
|:---:|:---:|:---:|:---:|
|  remove candidate A  |  - |  40  |  35  |
|  remove candidate B  |  27 |  - |  48  |
|  remove candidate C  |  27 |  48  | -  |

* eliminate A:
    * B wins over A with 40 first-place votes to C's 35 (first row)
* eliminate B:
    * C wins over A with 48 first-place votes to A's 27 (second row)
* eliminate C:
    * B wins over A with 48 first-place votes to A's 27 (third row)

In this case, B is the Condorcet winner (ie B wins head-to-head against **both** A and C) - whereas B would have otherwise lost to C under regular IRV.  Center Squeeze fixed!

### 3. Center Squeeze (no Condorcet winner)

Now, instead let's say the final 3 round comes down to:

    32:A>B>C
    17:B>C>A
    26:C>A>B

Under regular IRV, we drop B, resulting in a slightly closer race with:

* C: 43 final votes, winning over
* A: 32 final votes

This time, with Power IRV:

|  eliminate (below <sub>**vvv**</sub>) &nbsp;&nbsp;&nbsp;&nbsp; results -->  | &nbsp;&nbsp;&nbsp;&nbsp; A &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; B &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; C &nbsp;&nbsp;&nbsp;&nbsp; |
|:---:|:---:|:---:|:---:|
|  remove candidate A  |  - |  49  |  26  |
|  remove candidate B  |  32 |  - |  43  |
|  remove candidate C  |  **58** |  17  | -  |

* eliminate A:
    * B: 49 wins over C: 26 (first row)
* eliminate B:
    * C: 43 wins over A: 32 (second row)
* eliminate C:
    * A: 58 wins over B: 17 (third row)
  
#### Condorcet Tiebreaker

Now since there is not a Condorcet winner:
* A wins over B
* B wins over C
* C wins over A

...we need a way to break the tie.

> Power IRV says: look at **who got the most votes** in any pair.

You can see it was A with 58 votes over B, so A wins the election (vs regular IRV choosing C).

#### **How does that make sense again?**

So the whole idea is that we want to find the *strongest coalition* of supporters among the groups when the outcome isn't clear.

By removing each candidate, we basically ask "if your candidate wan't running, who would you support?"

In this case it was A pulling C supporters over against B that brought most people together.  Power IRV is intended to find the most agreement among the various factions - and that's exactly what happens.

### Power IRV differs from many other Condorcet tiebreakers

There are **sooo many** other Condorcet cycle winner selection methods - I have been digging through docs across the wide, wild Internet and (oddly) have yet to find something that seems to match our "what do do when you get to the final 3" round (and you can't pick a winner due to a Condorcet cycle).

Let's compare even more voting methods (from this [Comparison of preferential electoral systems](https://en.wikipedia.org/wiki/Tideman_alternative_method#Comparison_table)):

{:images: class="image-container"}
![Comparison of preferential electoral systems](/assets/images/ballot/inline/preferential_comparison.png){:class="img-responsive"}
{: images}
{:image-caption: class="image-caption" style="text-align: center;"}
Power IRV looking Real Good in there
{: image-caption}

So the tiebreaker approach we are using is **almost** the [Tideman / Ranked Pairs method](https://en.wikipedia.org/wiki/Ranked_pairs), but it is much simpler since we just pick the highest vote-getter out of the 3 finalists.

After digging all around the internet, I haven't been able to find any other method using this approach (since it doesn't work well for more than 3 candidates), but please shout out if you know of one...

Here are descriptions of [a bunch more Condorcet tie-breakers](http://www.cs.angelo.edu/~rlegrand/rbvote/desc.html) in case you want to check out other approaches too.

You can also [test them live here](http://www.cs.angelo.edu/~rlegrand/rbvote/calc.html) courtesy of Prof. Rob LeGrand.  Our ballot shorthand matches his so you can just copy/paste any of these ballots to try any other methods too.

### Power IRV vs other tiebreakers

Let's try this example:

    25:B>A>C
    27:C>B>A
    17:C>A>B
    31:A>C>B

|  eliminate (below <sub>**vvv**</sub>) &nbsp;&nbsp;&nbsp;&nbsp; results -->  | &nbsp;&nbsp;&nbsp;&nbsp; A &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; B &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; C &nbsp;&nbsp;&nbsp;&nbsp; |
|:---:|:---:|:---:|:---:|
|  remove candidate A  |  - |  27  |  **75**  |
|  remove candidate B  | 56  |  - |  44  |
|  remove candidate C  | 48  |  54  | -  |

* eliminate A:
  * C: 75 wins over B: 27 (first row)
* eliminate B:
  * A: 56 wins over C: 44 (second row)
* eliminate C:
  * B: 54 wins over A: 48 (third row)

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
* Bucklin
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
* Tideman / Ranked Pairs

I haven't been able to figure out yet if there is hard logic behind why these methods *should* choose the winner they do - Power IRV has clear logic that seems to make intuitive sense (the strongest coalition possible should win) when there is no otherwise clear winner.

### Let's make a case

    25:B>A>C
    27:C>B>A
    17:C>A>B
    31:A>C>B

#### 1\. So in this case if you just look at top votes (A vs C) you see:

* A: 31
* C: 44

**==> winner:  C (most loved)**

#### 2\. A head-to-head vs C:

* A: 56
* C: 44

**==> winner:  A (head-to-head winner)**

#### 3\. First + second choice vote totals:

* A: 73
* C: 75

**==> winner:  C (top overall support)**

#### 4\. Last-place votes:

* A: 27
* C: 25

**==> winner:  C (least bad)**

Basically, it still feels like C is the best choice here.  If you just pick the head-to-head winner, you fall back into the Center Squeeze situation and don't look at the larger picture:  who can bring the most people together?

Power IRV does exactly that (and only in these weird tiebreaker situations) - it is a clear winner here.

<br/>

-----------
<br/>

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

Effectively you force major parties into voting Good for themselves and Bad for the others, distorting many of the otherwise great benefits of this voting approach, encouraging negative campaigning again, etc.  Blecch.

<br/>

-----------
<br/>

# More good news:  Power IRV and DH3

The DH3 ["Dark Horse plus 3 rivals"](https://rangevoting.org/DH3Summ.html) pathology is where you have 3 strong candidates and one long shot.  Many voting systems have trouble here (Warren Smith claims that it affects "all(?) Condorcet systems based on full rank orderings"), but Power IRV does Just Fine since the dark horse is eliminated in the round of 4 finalists with the lowest top vote count.

There is no "DH2" scenario, since that would just wind up with one of the 2 major parties as the Condorcet winner (one will have more #1 votes and will therefore win).

<br/>

-----------
<br/>

# Other questions?

I'd love to hear from you.  Drop me an email at the address at the bottom of the page with "Power IRV" somewhere in the subject and let's talk.