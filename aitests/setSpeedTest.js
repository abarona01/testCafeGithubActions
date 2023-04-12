import { Selector } from "testcafe";

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
.page("https://devexpress.github.io/testcafe/example/");

test("Set Test Speed Test", async t =>{
    await t
    .setTestSpeed(0.01)
    .typeText("#developer-name","TAU")
    .click("#macos")
    .click("#submit-button");
});