# UQCS Website
[![Build Status](https://jenkins.uqcs.org.au/job/website/badge/icon)](https://jenkins.uqcs.org.au/job/website/)

The website of The University of Queensland Computing Society.

## Showcasing your project

Would you like to showcase your project? If so please produce a high
quality image of size 1000x750px and add it to `img/showcase/`.

Once you've produced the image add the below snippet to 
`_includes/showcase_content.html` replacing [IMG_NAME], [Project Title], 
[URL], and [Description] with your own information.

```
<div class="col s12 m6 l4">
  <div class="card small">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="img/showcase/[IMG_NAME]">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">
          [Project Title]
          <i class="material-icons right">more_vert</i></span>
      <p><a href="#">[URL]</a></p>
    </div>
    <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">
        [Project Title]
        <i class="material-icons right">close</i>
    </span>
      <p>
        [Description]
      </p>
    </div>
  </div>
</div>
```

Done that? Now just send us a pull request! Don't know how?
Email us at contact@uqcs.org.au for help, or ask in Slack.


## Website Content Requests and Bugs
If you find a bug on the website or would like to request an article or content
please select the issue tab and report the issue or what you would like. :)


## Copyright
Copyright (c) 2016 UQ Computing Society
