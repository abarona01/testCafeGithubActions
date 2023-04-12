import { Selector } from "testcafe";

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture.meta('version','1')("First Fixture")
.page("https://devexpress.github.io/testcafe/");

test.meta('env','production')
.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
    .typeText("#developer-name","TAU")
    .click("#macos")
    .click("#submit-button");
});