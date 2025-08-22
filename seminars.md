---
layout: default
title: Seminars
---

<h1>Upcoming Seminars</h1>
<p class="caption">Filter by type or location to find a session near you.</p>

<div class="filter-bar">
  <label>Type
    <select name="type" data-filter>
      <option value="all">All</option>
      {% assign types = site.data.seminars | map: "type" | uniq %}
      {% for t in types %}<option value="{{ t }}">{{ t }}</option>{% endfor %}
    </select>
  </label>
  <label>Location
    <input type="text" name="location" placeholder="e.g., Library" data-filter/>
  </label>
</div>

<table role="table" aria-label="Seminar schedule">
  <thead>
    <tr><th>Date</th><th>Time</th><th>Title</th><th>Location</th><th>Type</th><th>Sign Up</th></tr>
  </thead>
  <tbody>
  {% for s in site.data.seminars %}
    <tr data-type="{{ s.type }}" data-location="{{ s.location }}">
      <td>{{ s.date | date: TBD}}</td>
      <td>{{ TBD }}</td>
      <td>{{ TBD }}</td>
      <td>{{ TBD }}</td>
      <td><span class="badge">{{ s.type }}</span></td>
      <td><a class="btn" href="{{ s.signup }}" target="_blank" rel="noopener">Register</a></td>
    </tr>
  {% endfor %}
  </tbody>
</table>

<p class="notice">Want to host a seminar at your church, library, or community center? <a href="{{ '/contact' | relative_url }}">Contact us</a>.</p>
