# UQCS Website an amazing project

The website of The University of Queensland Computing Society.

This site is built on a verison of the [jamstack](https://jamstack.org/) using:

* Hugo Templating
* Bulma CSS Framework
* Font Awesome Icons
* Custom CSS and JS

Which is compiled to static files using Github Actions and then hosted Github Pages.


## Contributing
The UQCS site is a place to show off both the club itself, and the work its members. You can contribute ideas, bugs or suggestions by clicking the Issues tab above and creating a new issue.

You can contribute code by forking the repository, making your changes and creating a pull request. It's encouraged to create an issue for the changes you plan on making in your pull request and you should mention the IDs of any issues you work on in your pull request description.

For more information checkout the [CONTRIBUTING.md](CONTRIBUTING.md)

Want help with creating a pull request? No problem!
Email us at contact@uqcs.org.au for help, or ask in [Slack](https://slack.uqcs.org.au/).


### Getting Setup

1. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Install Hugo](https://gohugo.io/getting-started/installing/)
3. Open your preferred terminal.
4. Run `git clone https://github.com/UQComputingSociety/website.git`
5. Run `cd website`
6. Run `hugo server -D`
7. Open your preferred browser.
8. Navigate to http://localhost:1313/

### Google Calendar API Key

The /events calendar uses FullCalendar.js and fetches events from Google Calendar. To do this, it needs a Google API key. Currently, the production key is specified in [events/\_index.html](https://github.com/UQComputingSociety/website/blob/master/content/events/_index.html) but you will need your own key to test locally.

1. Go to https://console.developers.google.com/apis/dashboard. 
2. If you haven't done so already, sign up with a Google account and create a new project. (UQCS committee can sign in with the Google account and use the "UQCS Website Calendar" project.)
3. If you created a new project, enable the Google Calendar API from within APIs & Services &rarr; Library.
4. Go to APIs & Services &rarr; Credentials and create new credentials. This page also shows existing API keys.
5. Copy the key use it where needed. Optionally, you can restrict this key to specific websites and APIs.

### Showcasing your project

Coming Soon TM


## Licensing

This project is licensed under the Apache License 2.0.
