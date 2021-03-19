import { uploadProductImage } from "../api";
import { setInspirationImages } from "../localStorage";
import { showConfirmMessage, showMessage } from "../utils";

const InspirationScreen = {
    after_render: () => {
        document.getElementById('questions-inspiration').addEventListener('submit', async (event) => {
            event.preventDefault();
            console.log('test-single');
            const dataInspoImages = {
                inspoImage01: document.getElementById('image01').value ? document.getElementById('image01').value : '',
                inspoImage02: document.getElementById('image02').value ? document.getElementById('image02').value : '',
                inspoImage03: document.getElementById('image03').value ? document.getElementById('image03').value : '',
            };
            const verifyYesButton = document.getElementById('verify-yes-inspo');
            const verifyNoButton = document.getElementById('verify-no-inspo');
            if (verifyYesButton.checked) {
                setInspirationImages(dataInspoImages);
                console.log(JSON.parse(localStorage.getItem('inspoImages')));
                document.location.hash = '/submitdesign';
            } else if (verifyNoButton.checked) {
                setInspirationImages(dataInspoImages);
                showConfirmMessage('Ready? You won´t be able to modify your pictures after this point', () => {
                        document.location.hash = '/submitdesign';
                      });
            } else {
                showMessage('Confirm you are ready to move on');
            }
        });
        document.getElementById('image-file01').addEventListener('change', async (event) => {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('image', file);
            const data = await uploadProductImage(formData);
            if (data.error) {
                showMessage(data.error);
            } else {
                showMessage('Image Uploaded Successfully');
                document.getElementById('image01').value = data.image;
            }
        });
        document.getElementById('image-file02').addEventListener('change', async (event) => {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('image', file);
            const data = await uploadProductImage(formData);
            if (data.error) {
                showMessage(data.error);
            } else {
                showMessage('Image Uploaded Successfully');
                document.getElementById('image02').value = data.image;
            }
        });
        document.getElementById('image-file03').addEventListener('change', async (event) => {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('image', file);
            const data = await uploadProductImage(formData);
            if (data.error) {
                showMessage(data.error);
            } else {
                showMessage('Image Uploaded Successfully');
                document.getElementById('image03').value = data.image;
            }
        });
    },
    render: async () => {
        return `
            <div class='overall-questions'>
                <h2>Inspiration</h2>
                
                <form class='questions'  id='questions-inspiration'>
                    <p class='questions-paragraph'>Finally, send you designer some inspiration pictures. That way the designer will be able to understand the type of experience you would like to have.</p>
                    <div class='questions-box' id='inspiration-living'>
                        <h3>Living Room Inspo</h3>
                        <div class='questions-inputs'>
                            <label for='image01'>Image (680 x 830)</label>
                            <input type='text' id='image01' name='image' placeholder='Living Room Image' />
                            <input type='file' name='image-file' id='image-file01'/>
                        </div>
                    </div>
                    <div class='questions-box' id='project-name'>
                        <h3>Kitchen Inspo</h3>
                        <div class='questions-inputs'>
                            <label for='image02'>Image (680 x 830)</label>
                            <input type='text' id='image02' name='image' placeholder='Kitchen Image' />
                            <input type='file' name='image-file' id='image-file02'/>
                        </div>
                    </div>
                    <div class='questions-box' id='project-address'>
                        <h3>Other Inspo</h3>
                        <div class='questions-inputs'>
                            <label for='image03'>Image (680 x 830)</label>
                            <input type='text' id='image03' name='image' placeholder='Other' />
                            <input type='file' name='image-file' id='image-file03'/>
                        </div>
                    </div>
                    <div class='questions-box fw' id='inspiration-verify'>
                        <h3>Verify</h3>
                        <div class='questions-inputs center'>
                            <h4 class='question-title'>Have you uploaded everything you wanted?</h4>
                            <input type='radio' name='verify' id='verify-yes-inspo' value='Yes'/>
                            <label for='verify-yes-inspo' class='radio-btn-label'>Yes, I'm ready</label>
                            <br>
                            <input type='radio' name='verify' id='verify-no-inspo' value='No'/>
                            <label for='verify-no-inspo' class='radio-btn-label'>No, but it is okay</label>
                        </div>
                    </div>
                    <div class='submit-btn-div'>
                        <button type='submit' class='submit-btn' id='submit-next-btn'>Next</button>
                    </div>
                    <a href='/#/' class='back-to-result'>Back to the Start</a>
                </form>
            </div>`;
    },
};

export default InspirationScreen;
