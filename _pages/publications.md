---
layout: page
permalink: /publications/
title: publications
description: 
years: [2022, 2021, 2020, 2019, 2015]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

My publications in reverse-chronological order. As of {{ "now" | date: '%B %d, %Y' }}, my academic work received {{ site.data.gscholar.total_citations }} citations by the research community. Please find most up-to-date citation metrics via <a href="https://scholar.google.com/citations?user=AREhBXYAAAAJ&hl=en&inst=16406962374688485356">Google Scholar</a>.


{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
