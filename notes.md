## Notes

### Petzold 2008 on Turing 1936

p64

- Computable numbers: subset of real numbers whose decimals can be determined/calculated by finite means. Note: determined == calculated. Calculation as determination.

- Finite means refers to a process that could be infinite, but where each step is well defined and carried out in order. Perfect analogy with Cantor's enumerable infinite (natural numbers).

- "Although the subject (...) [is] the computable *numbers*, it is almost equally easy to define and investigate computable functions of an integral variable or a real computable variable, computable predicates, and so forth." What's the difference between a number and a function? A function takes a number and produces another one, while seeing a number as a function would be like a function that returned its own argument? That would work. But the point is that a number like pi has to be computed by a function that holds some state, then the function would be the one you call to generate the *next* digit, given the ones you already generated. This function probably only needs the position, and not the entire sequence; that, in the case of pi. What if you defined a number where the next digit was a function of all the previous digits, and where you could not skip any of them in the computation? Then the number would be akin to a chaotic process which is incompressible (all the previous information is necessary and equally relevant to represent it exactly).

- "The fundamental problems involved are, however, the same in each case, and I have chosen the computable numbers for explicit treatment as involving the least cumbrous technique."

- "This will include a development of the theory of functions of a real variable expressed in terms of computable numbers." This needs to be done.

p65

- "According to my definition, a number is computable if its decimal can be written down by a machine." Computability as an explicit process of transformation that can be mechanized. By mechanizing it and taking the human away from it, we feel the process can carry itself out, given energy, like a physical process.

- Petzold: "automated computing". We now simply say "computing", and when a human does it, "manual computing".

p66

- "(...) computable numbers include all numbers which could naturally be regarded as computable." Computable numbers are the "naturally regarded" computable numbers, makes me think of Feigenbaum's (from Gleick) "what in a reasonable man's mind" standard of proof. Petzold: in the list are rationals, algebraic numbers, and some trascendentals: pi, e; and only real parts of things because Turing placed the discussion on real terms (excluding complex variables). But not necessary all trascendentals. Note: trascendentals seem to straddle the computable and uncomputable, like some problems are straddling positions 1 (ch1) and 2 (ch2) in the Chomsky Hierarchy.

- "The computable numbers do not, however, include all definable numbers, and an example is given of a definable number which is not computable." I dare to say that then those numbers are definable in terms comprehensible to us humans, but are not algorithmically definable. They will involve existential or universal quantifiers, but won't be generatie (or may be generative, but we don't know or say how).

- "Although the class of computable numbers is so great, and in many ways similar to the class of real numbers, it is nevertheless enumerable." Computables are then mappable to the enumerable infinite; and reals, while similar to computable ones, are not - they are beyond enumerable.

p67
