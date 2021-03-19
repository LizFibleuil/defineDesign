import { getBasicInfo, setBasicInfo } from '../localStorage';
import { showMessage } from "../utils";

const HomeScreen = {
    after_render: async () => {
        document.getElementById('questions-the-basics').addEventListener('submit', async (event) => {
            event.preventDefault();
            const displayRadioValue = (radioName) => {
                const inputs = document.getElementsByName(radioName);
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].checked) {
                        return inputs[i].value;
                    }
                }
            };
            const dataBasicInfo = {
                projectName: document.getElementById('project-name').value,
                clientName: document.getElementById('project-client').value,
                projectAddress: {
                    projectStreet: document.getElementById('project-address').value ? document.getElementById('project-address').value : 'N/A',
                    projectCity: document.getElementById('project-city').value ? document.getElementById('project-city').value : 'N/A',
                    projectCountry: document.getElementById('project-country').value ? document.getElementById('project-country').value : 'N/A',
                },
                projectHomeType: displayRadioValue('type-home'),
                projectType: displayRadioValue('project-type') ? displayRadioValue('project-type') : 'N/A',
                projectEnvironment: displayRadioValue('environment') ? displayRadioValue('environment') : 'N/A',
            };
            /* console.log(dataBasicInfo); */
            const apartmentButton = document.getElementById('apartment');
            const singleFamilyButton = document.getElementById('single-family');
            if (apartmentButton.checked) {
                setBasicInfo(dataBasicInfo);
                /* console.log(JSON.parse(localStorage.getItem('basicInfo'))); */
                document.location.hash = '/apartment';
            } else if (singleFamilyButton.checked) {
                setBasicInfo(dataBasicInfo);
                /* console.log(JSON.parse(localStorage.getItem('basicInfo'))); */
                document.location.hash = '/singlefamily';
            } else {
                showMessage('Select whether project is an apartment or single-family home before moving forward');
            }
        });
    },
    render: async () => {
        const { projectName, clientName, projectAddress, projectHomeType, projectType, projectEnvironment } = getBasicInfo();
        /* console.log(projectName, clientName, projectAddress, projectHomeType, projectType, projectEnvironment); */
        /* Radio Button Checked Setup */
        // Project Home Type
        $(document).ready(() => {
           if (projectHomeType === 'Apartment') {
            $("input[name=type-home][value='Apartment']").prop('checked', true);
           } else if (projectHomeType === 'Single-Family') {
            $("input[name=type-home][value='Single-Family']").prop('checked', true);
           }
            });
        // Project Type
         $(document).ready(() => {
            if (projectType === 'New-Construction') {
             $("input[name=project-type][value='New-Construction']").prop('checked', true);
            } else if (projectType === 'Renovation') {
             $("input[name=project-type][value='Renovation']").prop('checked', true);
            } else if (projectType === 'Renovation-Addition') {
             $("input[name=project-type][value='Renovation-Addition']").prop('checked', true);
            }
             });
         // Project Environment
         $(document).ready(() => {
            if (projectEnvironment === 'Urban') {
             $("input[name=environment][value='Urban']").prop('checked', true);
            } else if (projectEnvironment === 'Suburban') {
             $("input[name=environment][value='Suburban']").prop('checked', true);
            } else if (projectEnvironment === 'Rural') {
             $("input[name=environment][value='Rural']").prop('checked', true);
            }
             });
        return `
            <div class='overall-questions'>
                <h2>The Basics</h2>
                <p class='questions-paragraph'>First, let’s define some basic project information. Go ahead and fill out the following form and continue to the next section.</p>
                <form class='questions'  id='questions-the-basics'>
                    <div class='questions-box' id='project-name-div'>
                        <h3>Project Name</h3>
                        <div class='questions-inputs'>
                            <label for='project-name'>Insert Name Below</label>
                            <h6>*Required</h6>
                            <input type='text' name='project-name' id='project-name' value='${projectName ? projectName : ``}' placeholder='Smith Renovation' required/>
                        </div>
                    </div>
                    <div class='questions-box' id='project-client-div'>
                        <h3>Client Name</h3>
                        <div class='questions-inputs'>
                            <label for='project-client'>Insert Name Below</label>
                            <h6>*Required</h6>
                            <input type='text' name='project-client' id='project-client' value='${clientName ? clientName : ``}' placeholder='Jane Smith' required/>
                        </div>
                    </div>
                    <div class='questions-box' id='project-address-div'>
                        <h3>Project Address</h3>
                        <div class='questions-inputs'>
                            <div class='question'>
                                <label for='project-address'>Street Address</label>
                                <br>
                                <input type='text' name='project-address' id='project-address' value='${projectAddress ? projectAddress.projectStreet : `1000 3rd Street`}' />
                                <br>
                            </div>
                            <div class='question'>
                                <label for='project-city'>City</label>
                                <br>
                                <input type='text' name='project-city' id='project-city' value='${projectAddress ? projectAddress.projectCity : `Panama City`}' />
                                <br>
                            </div>
                            <div class='question'>
                                <label for='project-country'>Country</label>
                                <br>
                                <input type='text' name='project-country' id='project-country' value='${projectAddress ? projectAddress.projectCountry : `Panama`}' />
                            </div>
                        </div>
                    </div>
                    <div class='questions-box' id='project-typeHome-div'>
                        <h3>Type of Home</h3>
                        <div class='questions-inputs'>
                            <input type='radio' name='type-home' id='apartment' value='Apartment'/>
                            <label for='apartment' class='radio-btn-label'>Apartment</label>
                            <br>
                            <input type='radio' name='type-home' id='single-family' value='Single-Family'/>
                            <label for='single-family' class='radio-btn-label'>Single-Family</label>
                        </div>
                    </div>
                    <div class='questions-box' id='project-type-div'>
                        <h3>Type of Project</h3>
                        <div class='questions-inputs'>
                            <input type='radio' name='project-type' id='new-construction' value='New-Construction' />
                            <label for='new-construction' class='radio-btn-label'>New-Construction</label>
                            <br>
                            <input type='radio' name='project-type' id='renovation' value='Renovation'/>
                            <label for='renovation' class='radio-btn-label'>Renovation</label>
                            <br>
                            <input type='radio' name='project-type' id='renovation-addition' value='Renovation-Addition'/>
                            <label for='renovation-addition' class='radio-btn-label'>Renovation-Addition</label>
                        </div>
                    </div>
                    <div class='questions-box' id='project-enviroment-div'>
                        <h3>Type of Environment</h3>
                        <div class='questions-inputs'>
                            <input type='radio' name='environment' id='urban' value='Urban'/>
                            <label for='urban' class='radio-btn-label'>Urban</label>
                            <br>
                            <input type='radio' name='environment' id='suburban' value='Suburban'/>
                            <label for='suburban' class='radio-btn-label'>Suburban</label>
                            <br>
                            <input type='radio' name='environment' id='rural' value='Rural'/>
                            <label for='rural' class='radio-btn-label'>Rural</label>
                        </div>
                    </div>
                    <button type='submit' class='submit-btn' id='submit-next-btn'>Next</button>
                </form>
            </div>`;
    },
};

export default HomeScreen;
