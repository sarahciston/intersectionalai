---
# layout: post
title: IAI A-to-Z Side A
nav_exclude: true
date: 2021-07-23
---
{::options parse_block_html="true" parse_span_html="true" /}

<!-- make web version a table, printable version a list glossary with two zine pages double sided? will mean having people update the work in 2 places to do so but will allow for words to be defined throughout the site dynamically -->

<div class="no-print">

#### Print instructions:
Print this page on the back side of the Intersectional AI A-to-Z Glossary Side A and fold as [shown here()].

</div>

<main class="zine">
<section class="zine-page page-1" markdown="1">

## Intersectional AI A-to-Z

This glossary of terms for Intersectional AI A-to-Z is a great place to get started. By all means it's only one example of definitions for these complex ideas, and it is meant as an open invitation for conversations and amendments! These concepts show the complexity of the topic seen from multiple angles; yet it is so important to try to break down these concepts into plain language in order to offer more openings for folks to join these conversations. Please chime in, ask questions, help make these definitions better!

![MLchart](){: .small }

>"it's often the way the technology is being used, rather than the technology itself, that determines whether it is appropriate to call it AI or not." (Elements of AI, Building AI)

</section>

<section class="zine-page page-2" markdown="1">

#### artificial intelligence 
>The collection of programs that use machine learning...have qualities that allow them to operate autonomously (without constant instructions given by the programmer or user), ...

<!--
#### autonomous agents
"The ability to perform tasks in complex environments without constant guidance by a user," is a key quality of so-called self-driving cars, AI assistants, and certain manufacturing robotics that are increasingly popular in conversations on the future of AI—both its potentials and its pitfalls. That perceived autonomy is often considered a marker of a system's sophistication, but algorithmic systems are always socio-technical, meaning they are co-created with and embedded in cultural systems.
-->

#### bias & variance
>In a machine learning problem, bias is the technical definition for XXXXX
>As bias decreases variance increases, and vice versa. Other trade-offs include accuracy vs interpretability, complexity vs scalability, ~~domain-specific knowledge vs data driven,~~ better algorithm vs more data. (Rajati) 

#### confidence interval
A range of numbers that helps describe how uncertain an estimate is. Any confidence interval has a high (e.g. 95%) chance of containing the true* value (that is, the accurate answer to the question being asked). So the bigger the interval, the more uncertain and the more doubt. Confidence intervals are used in statistics and in AI to determine a model (formula)'s reliability. *Classically presumes a hidden but "true" unknown value that is independent of the model (and this is not always the case of course). Unfortunately, uncertainty remains inherent in prediction and difficult to comprehend in models, even for researchers who create them (D'Ignasio & Klein 2019). 

#### data cleaning
Data does not come in ready to go, it must be preprocessed. This includes many adjustments that can affect the outcome, including selecting a subset of data (sampling), standardizing and scaling it in relation to a baseline (normalization), handling missing data and outliers with decision trees (which Adrian MacKenzie cites as "affiliated with arbitrariness"), as well as feature creation and extraction (discussed in F). The transformation of real-world information into "data" is never a neutral process but relies heavily on the conditions and goals of the research in context.

>"there is no “neutral,” “natural,” or “apolitical” vantage point that training data can be built upon. There is no easy technical “fix” by shifting demographics, deleting offensive terms, or seeking equal representation by skin tone. The whole endeavor of collecting images, categorizing them, and labeling them is itself a form of politics, filled with questions about who gets to decide what images mean and what kinds of social and political work those representations perform." (Crawford & Paglen "Excavating AI" 2019)

</section>
<section class="zine-page page-3" markdown="1">

#### explainability
>

#### feature extraction
>Features are the items in a model that its designers decide are relevant,

#### GANs
GAN stands for generative adversarial network and is a now-popular kind of machine learning used to generate new data, such as images seen in the "AI dreaming" aesthetic. It requires two parts: One part is trained on existing data in order to check the second part's work. The second part is trying to generate new data that can fool the first part (hence adversaries). 

#### hyperparameters
>

</section>
<section class="zine-page page-4" markdown="1">

#### information &/or intelligence
>

#### javascript
>

#### k-means & k-nearest neighbors
>KNN is a lazy learning algorithm, which means it waits for test points, whereas eager learning generalizes and builds a model first. 

#### loss function
>

</section>
<section class="zine-page page-5" markdown="1">

#### machine learning (model?)
>A field within AI that focuses on adaptive tools. These are "systems that improve their performance in a given task with more and more experience or data" (Elements of AI). "the “depth” of deep learning refers to the complexity of a mathematical model,"
(models) "Essentially all models are wrong but some are useful." (George Box)
"Data science is a recent umbrella term (term that covers several subdisciplines) that includes machine learning and statistics, certain aspects of computer science including algorithms, data storage, and web application development. Data science is also a practical discipline that requires understanding of the domain in which it is applied in, for example, business or science (Elements of AI)


#### neural network
>

#### overfitting & underfitting
>

#### python
>

</section>
<section class="zine-page page-6" markdown="1">

#### quantification
>

#### regression & classification
>

#### supervised and unsupervised
>

#### transformer
>

</section>
<section class="zine-page page-7" markdown="1">

#### uncertainty
>

#### values & variables
>

#### (bag-of-)words
A natural language processing method of analyzing and classifying text that looks only at the frequency each word occurs, while disregarding the order of the words, syntax, or grammar—as if the words were all thrown in a bag. 

#### X (as input) & Y (as output)
`y = f(x) + Σ` the simplest machine learning model looks like this. Written out it means that the output of a model is a function `f()` of the inputs `x` (which are also called parameters or features and are known) plus the error `Σ` (which is unknown). A function, here, just means that some calculation (algorithm, operation, recipe) is performed on the stuff inside `( )` based on what the model's creators have determined yields expected, "appropriate" results. 

</section>
<section class="zine-page page-8" markdown="1">

#### ...Z
#### REFERENCES 

*[Elements of AI]: https://course.elementsofai.com/1/1
*[D'Ignasio & Klein]: D'Ignasio, C. and Klein, K. 2020. Data Feminism. MIT Press.
*[Rajati]: Rajati, M.R. 2021. Lecture. Machine Learning for Data Science, USC, Los Angeles. June 2021.
*[MacKenzie]: MacKenzie, A. 2018. Machine Learners. MIT Press. 
*[Love Has No Labels]: https://lovehasnolabels.com/resources/glossary
*[Excavating AI]: Crawford, K., & Paglen, T. (2019). Excavating AI: The Politics of Images in Machine Learning Training Sets. 2019, September 19. https://www.excavating.ai


</section>
</main>

<!-- [Print Side One]() | [Print Side Two]()
**A** | **adversarial network** (& GANs) | **adversity** 
**B** | **bias (technical)** (w/ variance) | **bias (social)** 
**C** | **confidence interval**| **code of conduct**
**D** | **data cleaning** | **data colonialism** 
E | **explainability** | embodiment / digital epidermalization / emotion / ethical AI (for public good etc)
F | **features** extraction/selection (variables) | **FLOSS**
**H** | **hyperparameter**| heteronormative / **hackerspace**
**I** | **information** (signal/noise, Shannon) | **information** (situated, embodied)
**J** | **Javascript** | **Justice, transformative** 
K | **k-means, KNN** | Kimberlé Crenshaw? / 
L | long short-term memory (LSTM) / **loss function** | Lovelace et al
M | **machine learning** / Markov chain | makerspace / materiality 
N | **neural net** | **nonbinary** 
O | **overfitting & underfitting** | **othering**
P | Python / parameter / pattern recognition | privacy (GDPR?) / power
**Q** | **quantification (quantifier)** | **queer (theory)** 
**R** | **regression vs classification** | **race (as a technology) & racialization** 
S | **supervised vs unsupervised** | **sustainability** / situated / standpoint theory
**T** | **transformer**/transfer learning | **trans* rights (turing test) / transfeminism / transhuman**
U | **uncertainty** | **unknowability** 
V | **value/variable** / variance / vision | **value**??
W | **(bag-of-)words** (w nlp) | **white supremacy / white feminism**
X | x as input? | xenofeminism
Y | y as output? | ?yt ? 
Z | ? | zines (publishing practices)
[Print Side One]() | [Print Side Two]() -->