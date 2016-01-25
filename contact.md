---
layout: page
---
# Contact

If you want to get in contact with us, here are a few details:

Email: If you'd like to contact the executive, just email [contact@uqcs.org.au](mailto:contact@uqcs.org.au)

You can also find us on social networks, as can be seen at the bottom of all pages on the website.

<div class="row">
      <form class="col s12" action="//formspree.io/dmarj97@gmail.com"
      method="POST">
        <div class="row">
          <div class="input-field col s6">
            <input id="email" name="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" name="contents" length="120"></textarea>
            <label for="textarea1">Contents</label>
          </div>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action">Send
    <i class="material-icons right">send</i>
    <!-- Redirects user to home page after form submit -->
    <input type="hidden" name="_next" value="{{site.baseurl}}/" />
    <!-- Honeypot -->
    <input type="text" name="_gotcha" style="display:none" />
  </button>
      </form>
    </div>

