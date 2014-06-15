---
layout: page
title: Welcome
---

<p class="message">
  Hey there! My name is Mike Fussell. I'm a front-end developer and I work for NPR.<br>
  <hr>
  <p>
  This site is meant to serve as a space for me to record thoughts on various issues as well as what I learn, both at work and at home. 
  </p>
  <p>
  
  Follow along or don't. Really, it's just to prevent me from having to solve the same issue more than once. Oh, and to record some photos along the way.
  cheers!
</p>
<div class="about-pic">
  <img src="/assets/me_beach.png">
</div>

<div class="pagination">
  {% if paginator.next_page %}
    <a class="pagination-item older" href="{{ site.baseurl }}page{{paginator.next_page}}">Older</a>
  {% else %}
    <span class="pagination-item older">Older</span>
  {% endif %}
  {% if paginator.previous_page %}
    {% if paginator.page == 2 %}
      <a class="pagination-item newer" href="{{ site.baseurl }}">Newer</a>
    {% else %}
      <a class="pagination-item newer" href="{{ site.baseurl }}page{{paginator.previous_page}}">Newer</a>
    {% endif %}
  {% else %}
    <span class="pagination-item newer">Newer</span>
  {% endif %}
</div>

