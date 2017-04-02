# UQCS Website
[![Build Status](https://jenkins.uqcs.org.au/job/website/badge/icon)](https://jenkins.uqcs.org.au/job/website/)

The website of The University of Queensland Computing Society.

This site is made in Jekyll which is compiled to static files on Jenkins (see the build status icon) and then hosted on the UQ Cloud.

## Contributing
The UQCS site is a place to show off both the club itself, and the work its members. You can contribute ideas, bugs or suggestions by clicking the Issues tab above and creating a new issue.

You can contribute code by forking the repository, making your changes and creating a pull request. It's encouraged to create an issue for the changes you plan on making in your pull request and you should mention the IDs of any issues you work on in your pull request description.

Want help with creating a pull request? No problem!
Email us at contact@uqcs.org.au for help, or ask in Slack.

### Showcasing your project

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

## Copyright
Copyright (c) 2017 UQ Computing Society
