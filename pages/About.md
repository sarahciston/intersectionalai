---
layout: page
title: About
nav_order: 50
nav_exclude: true
date: 2021-07-06
---
{::options parse_block_html="true" parse_span_html="true" /}

<ul class="wikiMenu">
  {% for p in site.pages %}
    {% if p.menu == "wiki" %}
    <li><a class="post-link" href="{{ p.url | prepend: site.baseurl }}">{{ p.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

<main class="zine">
<section class="zine-page page-1" markdown="1">

# FAQ




</section>

<section class="zine-page page-2" markdown="1">
</section>

<section class="zine-page page-3" markdown="1">
</section>

<section class="zine-page page-4" markdown="1">
</section>

<section class="zine-page page-5" markdown="1">
</section>

<section class="zine-page page-6" markdown="1">
</section>

<section class="zine-page page-7" markdown="1">
</section>

<section class="zine-page page-8" markdown="1">
</section>
</main>