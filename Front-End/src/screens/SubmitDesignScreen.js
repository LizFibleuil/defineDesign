import { createDesign } from "../api";
import { apiUrl } from "../config";
import { getBasicInfo, getDefineRoomInfo, cleanBasicInfo, cleanDesignInfo, getInspirationImages, cleanInspirationImages } from "../localStorage";
import { showMessage } from "../utils";

const gettingInformation = () => {
    const { projectName, clientName, projectAddress, projectHomeType, projectType, projectEnvironment } = getBasicInfo();
    const { projectLiving, projectKitchen, projectDinning, projectBedrooms, projectPowderRoom, projectBathrooms, projectBasement, projectPatio, projectMudRoom, extraComments } = getDefineRoomInfo();
    const { inspoImage01, inspoImage02, inspoImage03 } = getInspirationImages();
    return {
        projectName,
        clientName,
        projectAddress,
        projectHomeType,
        projectType,
        projectEnvironment,
        projectLiving,
        projectKitchen,
        projectDinning,
        projectBedrooms,
        projectPowderRoom,
        projectBathrooms,
        projectBasement,
        projectPatio,
        projectMudRoom,
        extraComments,
        inspoImage01,
        inspoImage02,
        inspoImage03,
    };
};
const SubmitDesignScreen = {
    after_render: () => {
        document.getElementById('questions-subtmit-design').addEventListener('submit', async (event) => {
            event.preventDefault();
            const design = gettingInformation();
            console.log(design);
            const data = await createDesign(design);
            if (data.error) {
                showMessage(data.error);
            } else {
                cleanBasicInfo();
                cleanDesignInfo();
                cleanInspirationImages();
                console.log(apiUrl);
                document.location.hash = '/finish';
            }
        });
    },
    render: async () => {
        const {
            projectName,
            clientName,
            projectAddress,
            projectHomeType,
            projectType,
            projectEnvironment,
            projectLiving,
            projectKitchen,
            projectDinning,
            projectBedrooms,
            projectPowderRoom,
            projectBathrooms,
            projectBasement,
            projectPatio,
            projectMudRoom,
            extraComments,
            inspoImage01,
            inspoImage02,
            inspoImage03,
        } = gettingInformation();
        return `
            <div class='overall-questions'>
                <h2>Confirm your Definitions</h2>
                <form class='questions'  id='questions-subtmit-design'>
                    <p class='questions-paragraph'>Check what you’ve submitted below! If something does not look right, go back to the home page and modify your requests as needed.</p>
                    <h2 class='submit-title'>The Basics</h2>
                    <div class='questions-box submit' id='project-name-submit'>
                        <h3>Project Name</h3>
                        <div class='questions-inputs'>
                            <p>Your project name is:</p>
                            <p class='definition'>${projectName ? projectName : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name'>
                        <h3>Client Name</h3>
                        <div class='questions-inputs'>
                            <p> The client name is:</p>
                            <p class='definition'>${clientName ? clientName : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-address'>
                        <h3>Project Address</h3>
                        <div class='questions-inputs'>
                                <p> The project address is:</p>
                                <p class='definition'>${projectAddress ? projectAddress.projectStreet : 'None'}</p>
                                <p class='definition'>${projectAddress ? projectAddress.projectCity : 'None'}</p>
                                <p class='definition'>${projectAddress ? projectAddress.projectCountry : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name'>
                        <h3>Type of Home</h3>
                        <div class='questions-inputs'>
                            <p> The home type is:</p>
                            <p class='definition'>${projectHomeType ? projectHomeType : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name'>
                        <h3>Type of Project</h3>
                        <div class='questions-inputs'>
                            <p> The project type is:</p>
                            <p class='definition'>${projectType ? projectType : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name'>
                        <h3>Type of Environment</h3>
                        <div class='questions-inputs'>
                            <p> The project is set in a:</p>
                            <p class='definition'>${projectEnvironment ? projectEnvironment : 'None'} Environment</p>
                        </div>
                    </div>
                    <h2 class='submit-title'>Design by Room</h2>
                    <div class='questions-box submit' id='project-name-submit'>
                        <h3>Living Room</h3>
                        <div class='questions-inputs'>
                            <p>Your living room style is</p>
                            <p class='definition'>${projectLiving ? projectLiving.style : 'None'}</p>
                            <p>Your living room must accommodate</p>
                            <p class='definition'>${projectLiving ? `${projectLiving.quantityPeople} People` : 'None'}</p>
                            <p>The millwork should be:</p>
                            <p class='definition'>${projectLiving ? projectLiving.millwork : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name'>
                        <h3>Kitchen</h3>
                        <div class='questions-inputs'>
                            <p> Should we include an island?</p>
                            <p class='definition'>${projectKitchen ? projectKitchen.kitchenIsland : 'None'}</p>
                            <p> Include these appliances:</p>
                            <p class='definition'>${projectKitchen ? projectKitchen.appliances : 'None'}</p>
                            <p> The shelves should be:</p>
                            <p class='definition'>${projectKitchen ? projectKitchen.kitchenShelves : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-address'>
                        <h3>Dinning Room</h3>
                        <div class='questions-inputs'>
                            <p>Your dinning room style is</p>
                            <p class='definition'>${projectDinning ? projectDinning.style : 'None'}</p>
                            <p>Your dinning room must accommodate</p>
                            <p class='definition'>${projectDinning ? `${projectDinning.quantityPeople} People` : 'None'}</p>
                            <p>The millwork should be:</p>
                            <p class='definition'>${projectDinning ? projectDinning.millwork : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name'>
                        <h3>Bedrooms</h3>
                        <div class='questions-inputs'>
                            <p>We should accommodate</p>
                            <p class='definition'>${projectBedrooms ? `${projectBedrooms.quantityPeople} Beds` : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name'>
                        <h3>Powder Room</h3>
                        <div class='questions-inputs'>
                            <p> The bathroom vanity should be:</p>
                            <p class='definition'>${projectPowderRoom ? projectPowderRoom.vanity : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name'>
                        <h3>Bathrooms</h3>
                        <div class='questions-inputs'>
                            <p> The bathrooms should have a:</p>
                            <p class='definition'>${projectBathrooms ? projectBathrooms.washing : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name'>
                        <h3>Basement</h3>
                        <div class='questions-inputs'>
                            <p> The basement will be used as:</p>
                            <p class='definition'>${projectBasement ? projectBasement.usage : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name'>
                        <h3>Patio</h3>
                        <div class='questions-inputs'>
                            <p> The patio should contain:</p>
                            <p class='definition'>${projectPatio ? projectPatio.ammenities : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name'>
                        <h3>Mud Room</h3>
                        <div class='questions-inputs'>
                            <p> The storage should be:</p>
                            <p class='definition'>${projectMudRoom ? projectMudRoom.storage : 'None'}</p>
                        </div>
                    </div>
                    <div class='questions-box submit fw' id='project-name'>
                        <h3>Extra Comments</h3>
                        <div class='questions-inputs'>
                            <p> Besides the above information, we need the following:</p>
                            <p class='definition'>${extraComments ? extraComments : 'None'}</p>
                        </div>
                    </div>
                    <h2 class='submit-title'>Inspiration</h2>
                    <div class='questions-box submit' id='project-name-submit'>
                        <h3>Living Room Inspo</h3>
                        <div class='questions-inputs'>
                            <p>The image has been</p>
                            <p class='definition'>${inspoImage01 ? 'Submitted' : 'Not Submitted'}</p>
                            <img src="${inspoImage01}" alt="Inspiration Image" class='${inspoImage01 ? `` : `inactive-image`}'/>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name-submit'>
                        <h3>Kitchen Inspo</h3>
                        <div class='questions-inputs'>
                            <p>The image has been</p>
                            <p class='definition'>${inspoImage02 ? 'Submitted' : 'Not Submitted'}</p>
                            <img src="${inspoImage02}" alt="Inspiration Image" class='${inspoImage02 ? `` : `inactive-image`}'/>
                        </div>
                    </div>
                    <div class='questions-box submit' id='project-name-submit'>
                        <h3>Other Inspo</h3>
                        <div class='questions-inputs'>
                            <p>The image has been</p>
                            <p class='definition'>${inspoImage03 ? 'Submitted' : 'Not Submitted'}</p>
                            <img src="${inspoImage03}" alt="Inspiration Image" class='${inspoImage03 ? `` : `inactive-image`}'/>
                        </div>
                    </div>
                    <div class='submit-btn-div'>
                        <button type='submit' class='submit-btn' id='submit-next-btn'>Submit to Designer</button>
                    </div>
                    <a href='/#/' class='back-to-result'>Back to the Start</a>
                </form>
            </div>`;
    },
};

export default SubmitDesignScreen;
