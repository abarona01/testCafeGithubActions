import { Selector } from "testcafe";

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
.page("https://devexpress.github.io/testcafe/example/");

test.only.page("First Test", async t =>{
    await t
    .typeText("#developer-name","TAU")
    .click("#macos")
    .click("#submit-button");
});
test("First Test", async t =>{
    await t
    .typeText("#developer-name","TAU")
    .click("#macos")
    .click("#submit-button");
});