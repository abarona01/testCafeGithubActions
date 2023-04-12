import { Selector } from "testcafe";

const fileUpload = Selector('input#file-upload');
const uploadfileButton = Selector('input#file-submit.button');

fixture("File Upload Fixture")
    .page("https://the-internet.herokuapp.com/upload");

test("File Upload test",async t =>{
    await t
    .setFilesToUpload(fileUpload,'../../aitests/logo/samplelogo.jpg')
    .clearUpload(fileUpload)
    .setFilesToUpload(fileUpload,'../../aitests/logo/samplelogo.jpg')
    .debug()
    .click(uploadfileButton)
});