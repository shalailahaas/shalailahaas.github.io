---
layout: page
permalink: /publications/
title: publications
years: [2023, 2022, 2021, 2020, 2019, 2015]
description: 
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

My publications in reverse-chronological order. As of {{ "now" | date: '%B %d, %Y' }}, my academic work received {{ site.data.gscholar.total_citations }} citations by the research community. Please find most up-to-date citation metrics via <a href="https://scholar.google.com/citations?user=AREhBXYAAAAJ&hl=en&inst=16406962374688485356">Google Scholar</a>.


{% bibliography %}

</div>
