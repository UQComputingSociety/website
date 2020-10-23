let lightSchemeIcon = document.querySelector('link#light-scheme-icon');
let darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

function onUpdate() {

    if (matcher.matches) {
        if (lightSchemeIcon != null) {
            lightSchemeIcon.remove();
        }
        document.head.append(darkSchemeIcon);
    } else {
        if (darkSchemeIcon != null) {
            darkSchemeIcon.remove();
        }
        document.head.append(lightSchemeIcon);
    }
}

matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
onUpdate();