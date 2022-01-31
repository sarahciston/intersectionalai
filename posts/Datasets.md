---
layout: post
title: Datasets & Models
nav_order: 20
date: 2022-01-08
desc: Feed your machines
published: true
---
{::options parse_block_html="true" parse_span_html="true" /}

# Datasets and Models, Ingredients and Recipes

It's not just a list of random choices and tools, it's a critical consideration... our choices matter for what we make.

>> "When assessing whether a task is solvable, we first need to ask: should it be solved? And if so, should it be solved by AI?" (Jacobson et al. 2020)

>> They perpetuate under-representation and "a range of harmful and problematic representation." They "use cheap tricks" "make ethically dubious questions seem answerable" "strips away context" (Paulladua et al. 2020) "failure to recognize annotation work as *interpretive work*". 

## Data: Every Input Was Someone Else's Output

Garbage In, Garbage Out

### Text and Image 
* [WIT, Wikipedia-based Image Text Dataset](https://github.com/google-research-datasets/wit), Google's open-source multimodal scraping of Wikipedia
* [Conceptual Captions]()

### Image Data
* [deepDataset Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/deepdataset/), build your own
* ~~[COCO]~~ Microsoft
* ~~[ImageNet]~~ built on WordNet, Stanford Vision Lab
* ~~[Open Images]~~ Google
* [Better Images of AI](https://betterimagesofai.org/), stock images of metaphors for AI

### Text Data
* [CommonCrawl](https://commoncrawl.org/the-data/) ?
* [C4: Colossal Cleaned Crawled Corpus](), see [^T5] below
* [Newsroom](https://lil.nlp.cornell.edu/newsroom/) (https://paperswithcode.com/paper/newsroom-a-dataset-of-13-million-summaries), "1.3 million articles and summaries written by authors and editors in the newsrooms of 38 major publications. The summaries are obtained from search and social metadata between 1998 and 2017 and use a variety of summarization strategies combining extraction and abstraction"
* [Newsroom](https://github.com/lil-lab/newsroom) (https://paperswithcode.com/paper/newsroom-a-dataset-of-13-million-summaries), "1.3 million articles and summaries written by authors and editors in the newsrooms of 38 major publications. The summaries are obtained from search and social metadata between 1998 and 2017 and use a variety of summarization strategies combining extraction and abstraction"
* [NYTimes Annotated Corpus](https://paperswithcode.com/dataset/new-york-times-annotated-corpus), "over 1.8 million articles written and published by the New York Times between January 1, 1987 and June 19, 2007 with article metadata"

### Audio Data
* [Mozilla CommonVoice](https://commonvoice.mozilla.org/en/datasets), "open source, multi-language dataset of voices that anyone can use to train speech-enabled applications", 2021-07-21, 65 GB, 75,879 voices
* [WikiCommons](https://commons.wikimedia.org/wiki/Category:Audio_files)

## Models

### Language Processing
* [DeepSpeech](), Mozilla (created from CommonVoice)
* [Word2Vec]()
* [T5 using C4: Colossal Cleaned Crawled Corpus](https://github.com/google-research/text-to-text-transfer-transformer#datasets) 

