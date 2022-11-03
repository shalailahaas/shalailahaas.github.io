---
layout: page
title: news
permalink: /news/
description: #What has been going on
nav: true
order: 3
---
<div>
    <table>
    {% assign news = site.news | reverse %}
    {% for item in news %}
      <tr>
        <td class="date"><div style="width: 120px" >{{ item.date | date: "%b %-d, %Y" }}</div></td>
        <td class="announcement">
          {% if item.inline %}
            {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
          {% else %}
            <a class="news-title" href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a>
          {% endif %}
        </td>
      </tr>
    {% endfor %}
    </table>
</div>