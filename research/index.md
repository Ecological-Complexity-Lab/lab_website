---
title: Research
nav:
  order: 1
  tooltip: Research directions
---

_We strive to characterize the complexity of ecological systems and understand its nature and consequences. Our research combines modeling, simulations, data analysis and ecological/evolutionary theory in a variety of systems and across levels: from the molecular (genes), to individuals, to species assemblages to meta-communities. We collaborate with super-smart people in Israel and internationally._ **Our multidisciplinary work is on the interface between biology and network science, providing excellent opportunities for students to work on interesting and challenging topics while gaining a broad set of skills to conduct research both in academia and outside.** _We believe in making honest, open science in a way that is engaging, collaborative and emphasizes good working-relations._

{% include section.html %}

## From description to prediction in ecosystems

{% capture content %}
  {%
    include figure.html
    image="images/research_lp.jpg"
    width="200px"
  %}
{% endcapture %}
​
{%
  include float.html
  content=content
  flip=true
%}
​
Ecological networks are almost always incomplete: many species interactions remain unobserved because sampling is limited, costly, or biased. This hampers our ability to understand community structure and to forecast how networks respond to environmental change. To address this, we develop and test statistical and machine-learning approaches to predict missing interactions. Beyond improving datasets, link prediction provides quantitative information on the relative importance of the factors underlying ecological interactions, and enables forecasting the response of communities to environmental change.

**Keywords:** Link prediction; Machine learning; Species interactions; Ecological forecasting; Network inference

Key publications:
- [Inductive link prediction facilitates the discovery of missing links and enables cross-community inference in ecological networks](https://www.nature.com/articles/s41559-025-02715-6)
- [Physiological and Environmental Factors Predict Protozoan Infection Profiles in Rats](https://doi.org/10.32942/X2MP9H)


## Structure and dynamics of ecological multilayer networks

{% capture content %}
  {%
    include figure.html
    image="images/research_emln.png"
    width="200px"
  %}
{% endcapture %}
​
{%
  include float.html
  content=content
  flip=true
%}
​
The study of networks has been a fundamental component of population and community ecology but ecological networks have been typically studied in isolation – that is, they involve a single type of interaction or represent a particular community that it is not connected to others. Recent advances in the field of multilayer networks in network science, together with an increase in the availability of adequate ecological data, now provide an exciting opportunity for ecologists to move beyond studies of isolated networks. In our research, we use ecological multilayer networks to investigate the variation across interconnected ecological networks such as those interconnected in space, time, or involving several interaction types. We also use this framework to study socio-ecological networks in which human activities are directly connected to ecological nodes. In addition, we develop methodology to facilitate and advance the analysis of ecological multilayer networks.

**Keywords**: Multilayer networks; Community ecology; Spatial–temporal dynamics; Social–ecological systems; Network methodology
​
Key publications:
- [Conceptualizing microbe–plasmid communities as complex adaptive systems](http://www.cell.com/article/S0966842X23000252/fulltext
)
- [Multilayer networks of plasmid genetic similarity reveal potential pathways of gene transmission](https://www.nature.com/articles/s41396-023-01373-5	https://www.overleaf.com/project/6356558f59529acc46781011)
- [Local knowledge enhances the sustainability of interconnected fisheries](https://ecoevorxiv.org/repository/view/7829/)
  
{% include section.html %}

## The complexity of infectious interactions

{% capture content %}
  {%
    include figure.html
    image="images/research_microbes.jpg"
    width="200px"
  %}
{% endcapture %}
​
{%
  include float.html
  content=content
  flip=true
%}

In nature, infectious agents—from parasites in wildlife to microbes and their mobile genetic elements—spread across multiple hosts and environments, creating intricate webs of direct and indirect effects. Capturing these dynamics in epidemiological or ecological models is challenging because multihost–multiparasite systems are nonlinear and their higher-level outcomes cannot be easily inferred from pairwise interactions alone. We study these systems through the lens of network science, focusing on how ecological and evolutionary processes structure host–parasite and microbe–phage/plasmid interactions across scales, from individuals to communities. This approach allows us to link infection networks at the species level with transmission processes at the individual level, while also addressing how external drivers such as land-use change alter infection risk and spread. By integrating modeling, theory, and data, we aim to uncover general principles of infectious network organization and their consequences for the dynamics of infectious agents.

**Keywords:** Disease ecology; Microbial ecology; Epidemiology; Host–parasite networks; Plasmids

{% include section.html %}


{%
  include tags.html
  tags="NSF-BSF, host-parasite interactions"
%}
