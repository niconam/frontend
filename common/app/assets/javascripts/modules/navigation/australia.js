/**
 * TODO - temporary till we have proper single domain editions
 */
define([
    'common',
    'modules/userPrefs',
    'bean',
    'bonzo'],
    function (common, userPrefs, bean, bonzo) {

    var AUS = "australia-edition";

    function AustraliaEdition() {

        bean.on(document, 'click', '.edition', function(e) {

            if (bonzo(e.target).hasClass('edition-au')) {
                userPrefs.switchOn(AUS);
            } else {
                userPrefs.switchOff(AUS);
            }
        });


        if (userPrefs.isOn(AUS)) {
            // convert all home links to AUS front
            common.$g("a[href='/']").attr("href", "/australia");

            // remove au edition links
            common.$g(".edition-au").each(function(e) {
                bonzo(e.parentNode).remove();
            });
        }
    }

    return AustraliaEdition;
});