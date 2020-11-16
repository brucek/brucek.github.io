---
---
{% assign author = site[page.author] %}

{% if author %}
    {{ page.date }} - Written by [{{ author.name }}]({{ author.web }})
{% else %}
    {{ page.date }} - Written by [brucek](https://brucekrysiak.com)
{% endif %}