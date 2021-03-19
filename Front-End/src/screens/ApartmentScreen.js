import { getDefineRoomInfo, setDefineRoomInfo } from "../localStorage";
import { showConfirmMessage, showMessage } from "../utils";

const ApartmentScreen = {
    after_render: () => {
        document.getElementById('questions-apartment').addEventListener('submit', async (event) => {
            event.preventDefault();
            const displayRadioValue = (radioName) => {
                const inputs = document.getElementsByName(radioName);
                for (let i = 0; i < inputs.length; i++) {
                    if (inputs[i].checked) {
                        return inputs[i].value;
                    }
                }
            };
            const dataDefineRoom = {
                projectLiving: {
                    style: displayRadioValue('living-style') ? displayRadioValue('living-style') : 'N/A',
                    quantityPeople: document.getElementById('living-quantity-people').value,
                    millwork: displayRadioValue('living-millwork') ? displayRadioValue('living-millwork') : 'N/A',
                },
                projectKitchen: {
                    kitchenIsland: displayRadioValue('kitchen-island') ? displayRadioValue('kitchen-island') : 'N/A',
                    appliances: $('input[name ="kitchen-appliances"]:checked').map(function value() {
                        return $(this).val();
                    }).get().length > 0 ? $('input[name ="kitchen-appliances"]:checked').map(function value() {
                        return $(this).val();
                    }).get() : ['N/A'],
                    kitchenShelves: displayRadioValue('kitchen-shelves') ? displayRadioValue('kitchen-shelves') : 'N/A',
                },
                projectDinning: {
                    style: displayRadioValue('dinning-style') ? displayRadioValue('dinning-style') : 'N/A',
                    quantityPeople: document.getElementById('dinning-quantity-people').value,
                    millwork: displayRadioValue('dinning-millwork') ? displayRadioValue('dinning-millwork') : 'N/A',
                },
                projectBedrooms: {
                    quantityPeople: document.getElementById('bedrooms-quantity-people').value,
                },
                projectPowderRoom: {
                    vanity: displayRadioValue('powder-vanity') ? displayRadioValue('powder-vanity') : 'N/A',
                },
                projectBathrooms: {
                    washing: displayRadioValue('bathroom-washing') ? displayRadioValue('bathroom-washing') : 'N/A',
                },
                projectBasement: {
                    usage: 'N/A',
                },
                projectPatio: {
                    ammenities: ['N/A'],
                },
                projectMudRoom: {
                    storage: 'N/A',
                },
                extraComments: document.getElementById('apartment-extra-comments').value ? document.getElementById('apartment-extra-comments').value : 'N/A',
            };
            /* console.log(dataDefineRoom); */
            const verifyYesButton = document.getElementById('verify-yes');
            const verifyNoButton = document.getElementById('verify-no');
            if (verifyYesButton.checked) {
                setDefineRoomInfo(dataDefineRoom);
                document.location.hash = '/inspiration';
            } else if (verifyNoButton.checked) {
                setDefineRoomInfo(dataDefineRoom);
                showConfirmMessage('Ready? You won´t be able to modify your selection after this point', () => {
                        document.location.hash = '/inspiration';
                      });
            } else {
                showMessage('Confirm you are ready to move on');
            }
        });
    },
    render: async () => {
        const peopleNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const { projectLiving, projectKitchen, projectDinning, projectBedrooms, projectPowderRoom, projectBathrooms, extraComments } = getDefineRoomInfo();
        /* Radio Button Checked Setup */
        // Living Room
        if (projectLiving) {
            $(document).ready(() => {
                if (projectLiving.style === 'Vibrant') {
                $("input[name=living-style][value='Vibrant']").prop('checked', true);
                } else if (projectLiving.style === 'Serene') {
                $("input[name=living-style][value='Serene']").prop('checked', true);
                } else if (projectLiving.style === 'Moody') {
                $("input[name=living-style][value='Moody']").prop('checked', true);
                }
             });
             $(document).ready(() => {
                if (projectLiving.millwork === 'Custom-Millwork') {
                $("input[name=living-millwork][value='Custom-Millwork']").prop('checked', true);
                } else if (projectLiving.millwork === 'Furniture') {
                $("input[name=living-millwork][value='Furniture']").prop('checked', true);
                } else if (projectLiving.millwork === 'Mix') {
                $("input[name=living-millwork][value='Mix']").prop('checked', true);
                }
             });
        }
         // Kitchen
         if (projectKitchen) {
            $(document).ready(() => {
                if (projectKitchen.kitchenIsland === 'Yes') {
                $("input[name=kitchen-island][value='Yes']").prop('checked', true);
                } else if (projectKitchen.kitchenIsland === 'No') {
                $("input[name=kitchen-island][value='No']").prop('checked', true);
                }
             });
             $(document).ready(() => {
                     for (let i = 0; i < projectKitchen.appliances.length; i++) {
                         console.log(projectKitchen.appliances[i]);
                         $("input[name=kitchen-appliances]").filter(function value() { return this.value == projectKitchen.appliances[i]; }).prop('checked', true);
                     }
             });
             $(document).ready(() => {
                if (projectKitchen.kitchenShelves === 'Upper-Cabinets') {
                $("input[name=kitchen-shelves][value='Upper-Cabinets']").prop('checked', true);
                } else if (projectKitchen.kitchenShelves === 'Open-Shelves') {
                $("input[name=kitchen-shelves][value='Open-Shelves']").prop('checked', true);
                } else if (projectKitchen.kitchenShelves === 'Mix') {
                $("input[name=kitchen-shelves][value='Mix']").prop('checked', true);
                }
             });
        }
        // Dinning Room
        if (projectDinning) {
            $(document).ready(() => {
                if (projectDinning.style === 'Vibrant') {
                $("input[name=dinning-style][value='Vibrant']").prop('checked', true);
                } else if (projectDinning.style === 'Serene') {
                $("input[name=dinning-style][value='Serene']").prop('checked', true);
                } else if (projectDinning.style === 'Moody') {
                $("input[name=dinning-style][value='Moody']").prop('checked', true);
                }
             });
             $(document).ready(() => {
                if (projectDinning.millwork === 'Custom-Millwork') {
                $("input[name=dinning-millwork][value='Custom-Millwork']").prop('checked', true);
                } else if (projectDinning.millwork === 'Furniture') {
                $("input[name=dinning-millwork][value='Furniture']").prop('checked', true);
                } else if (projectDinning.millwork === 'Mix') {
                $("input[name=dinning-millwork][value='Mix']").prop('checked', true);
                }
             });
        }
        // Powder Room
        if (projectPowderRoom) {
            $(document).ready(() => {
                if (projectPowderRoom.vanity === 'Floating-Vanity') {
                $("input[name=powder-vanity][value='Floating-Vanity']").prop('checked', true);
                } else if (projectPowderRoom.vanity === 'Floor-Vanity') {
                $("input[name=powder-vanity][value='Floor-Vanity']").prop('checked', true);
                } else if (projectPowderRoom.vanity === 'Pedestal') {
                $("input[name=powder-vanity][value='Pedestal']").prop('checked', true);
                }
             });
        }
        // Bathrooms
        if (projectBathrooms) {
            $(document).ready(() => {
                if (projectBathrooms.washing === 'Shower') {
                $("input[name=bathroom-washing][value='Shower']").prop('checked', true);
                } else if (projectBathrooms.washing === 'Soaking-Tub') {
                $("input[name=bathroom-washing][value='Soaking-Tub']").prop('checked', true);
                } else if (projectBathrooms.washing === 'Mix') {
                $("input[name=bathroom-washing][value='Mix']").prop('checked', true);
                }
             });
        }
        return `
            <div class='overall-questions'>
                <h2>Define by Room</h2>
                <h4 class='overall-title'>Apartment</h4>
                <form class='questions' id='questions-apartment'>
                    <p class='questions-paragraph'>Let’s help your designer understand what you need in your home. Define each room by selecting some options below. If these options lack what you are looking for, describe what you need in the comments below.</p> 
                    <div class='questions-box' id='apartment-living'>
                        <h3>Living Room</h3>
                        <div class='questions-inputs'>
                            <h4 class='question-title'>Style</h4>
                            <input type='radio' name='living-style' id='style-vibrant' value='Vibrant'/>
                            <label for='style-vibrant' class='radio-btn-label'>Vibrant</label>
                            <br>
                            <input type='radio' name='living-style' id='style-serene' value='Serene' />
                            <label for='style-serene' class='radio-btn-label'>Serene</label>
                            <br>
                            <input type='radio' name='living-style' id='style-moody' value='Moody' />
                            <label for='style-moody' class='radio-btn-label'>Moody</label>
                            <h4 class='question-title'>Number of People</h4>
                            <h5>Quantity: </h5>
                            <div class='select'>
                                <select class='qty-select' id='living-quantity-people'>
                                    <option value='0' >Number of Beds</option>
                                    ${projectLiving ? peopleNum.map((num) => projectLiving.quantityPeople == num ? `<option selected value="${num}">${num}</option>` : `<option value="${num}">${num}</option>`) : peopleNum.map((num) => `<option value="${num}">${num}</option>`)}
                                    <span class="focus"></span> 
                                </select>
                            </div>
                            <h4 class='question-title'>Millwork</h4>
                            <input type='radio' name='living-millwork' id='living-custom' value='Custom-Millwork'/>
                            <label for='living-custom' class='radio-btn-label'>Custom Millwork</label>
                            <br>
                            <input type='radio' name='living-millwork' id='living-furniture' value='Furniture'/>
                            <label for='living-furniture' class='radio-btn-label'>Furniture</label>
                            <br>
                            <input type='radio' name='living-millwork' id='living-mix' value='Mix'/>
                            <label for='living-mix' class='radio-btn-label'>Mix</label>
                        </div>
                    </div>
                    <div class='questions-box' id='apartment-kitchen'>
                        <h3>Kitchen</h3>
                        <div class='questions-inputs'>
                            <h4 class='question-title'>Kitchen Island</h4>
                            <input type='radio' name='kitchen-island' id='island-yes' value='Yes'/>
                            <label for='island-yes' class='radio-btn-label'>Yes, include</label>
                            <br>
                            <input type='radio' name='kitchen-island' id='island-no' value='No' />
                            <label for='island-no' class='radio-btn-label'>No, do not include</label>
                            <h4 class='question-title'>Appliances</h4>
                            <input type='checkbox' name='kitchen-appliances' id='appliance-fridge' value='Fridge'/>
                            <label for='appliance-fridge' class='checkbox-btn-label'>Refrigerator</label>
                            <br>
                            <input type='checkbox' name='kitchen-appliances' id='appliance-oven' value='Stove-Oven'/>
                            <label for='appliance-oven' class='checkbox-btn-label'>Stove & Oven</label>
                            <br>
                            <input type='checkbox' name='kitchen-appliances' id='appliance-microwave' value='Microwave'/>
                            <label for='appliance-microwave' class='checkbox-btn-label'>Microwave</label>
                            <br>
                            <input type='checkbox' name='kitchen-appliances' id='appliance-wine-fridge' value='Wine-fridge'/>
                            <label for='appliance-wine-fridge' class='checkbox-btn-label'>Wine-fridge</label>
                            <br>
                            <input type='checkbox' name='kitchen-appliances' id='appliance-coffee' value='Coffee Machine'/>
                            <label for='appliance-coffee' class='checkbox-btn-label'>Coffee Machine</label>
                            <br>
                            <h4 class='question-title'>Shelves</h4>
                            <input type='radio' name='kitchen-shelves' id='shelves-uppers' value='Upper-Cabinets'/>
                            <label for='shelves-uppers' class='radio-btn-label'>Upper Cabinets</label>
                            <br>
                            <input type='radio' name='kitchen-shelves' id='shelves-shelves' value='Open-Shelves' />
                            <label for='shelves-shelves' class='radio-btn-label'>Open-Shelves</label>
                            <br>
                            <input type='radio' name='kitchen-shelves' id='shelves-mix' value='Mix' />
                            <label for='shelves-mix' class='radio-btn-label'>Mix</label>
                        </div>
                    </div>
                    <div class='questions-box' id='apartment-dinning'>
                        <h3>Dinning Room</h3>
                        <div class='questions-inputs'>
                            <h4 class='question-title'>Style</h4>
                            <input type='radio' name='dinning-style' id='dinning-vibrant' value='Vibrant'/>
                            <label for='dinning-vibrant' class='radio-btn-label'>Vibrant</label>
                            <br>
                            <input type='radio' name='dinning-style' id='dinning-serene' value='Serene' />
                            <label for='dinning-serene' class='radio-btn-label'>Serene</label>
                            <br>
                            <input type='radio' name='dinning-style' id='dinning-moody' value='Moody' />
                            <label for='dinning-moody' class='radio-btn-label'>Moody</label>
                            <h4 class='question-title'>Number of People</h4>
                            <h5>Quantity: </h5>
                            <div class='select'>
                                <select class='qty-select' id='dinning-quantity-people'>
                                    <option value='0' >Number of Beds</option>
                                    ${projectLiving ? peopleNum.map((num) => projectDinning.quantityPeople == num ? `<option selected value="${num}">${num}</option>` : `<option value="${num}">${num}</option>`) : peopleNum.map((num) => `<option value="${num}">${num}</option>`)}
                                    <span class="focus"></span> 
                                </select>
                            </div>
                            <h4 class='question-title'>Millwork</h4>
                            <input type='radio' name='dinning-millwork' id='dinning-custom' value='Custom-Millwork'/>
                            <label for='dinning-custom' class='radio-btn-label'>Custom Millwork</label>
                            <br>
                            <input type='radio' name='dinning-millwork' id='dinning-furniture' value='Furniture'/>
                            <label for='dinning-furniture' class='radio-btn-label'>Furniture</label>
                            <br>
                            <input type='radio' name='dinning-millwork' id='dinning-mix' value='Mix'/>
                            <label for='dinning-mix' class='radio-btn-label'>Mix</label>
                        </div>
                    </div>
                    <div class='questions-box' id='apartment-bedrooms'>
                        <h3>Bedrooms</h3>
                        <div class='questions-inputs'>
                            <h4 class='question-title'>Number of Bedrooms</h4>
                            <h5>Quantity: </h5>
                            <div class='select'>
                                <select class='qty-select' id='bedrooms-quantity-people'>
                                    <option value='0' >Number of Beds</option>
                                    ${projectLiving ? peopleNum.map((num) => projectBedrooms.quantityPeople == num ? `<option selected value="${num}">${num}</option>` : `<option value="${num}">${num}</option>`) : peopleNum.map((num) => `<option value="${num}">${num}</option>`)}
                                    <span class="focus"></span> 
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class='questions-box' id='apartment-powderRoom'>
                        <h3>Powder Room</h3>
                        <div class='questions-inputs'>
                            <h4 class='question-title'>Vanity</h4>
                            <input type='radio' name='powder-vanity' id='powder-floating' value='Floating-Vanity'/>
                            <label for='powder-floating' class='radio-btn-label'>Floating-Vanity</label>
                            <br>
                            <input type='radio' name='powder-vanity' id='powder-floor' value='Floor-Vanity'/>
                            <label for='powder-floor' class='radio-btn-label'>Floor-Vanity</label>
                            <br>
                            <input type='radio' name='powder-vanity' id='powder-pedestal' value='Pedestal'/>
                            <label for='powder-pedestal' class='radio-btn-label'>Pedestal</label>
                        </div>
                    </div>
                    <div class='questions-box' id='apartment-bathrooms'>
                        <h3>Bathrooms</h3>
                        <div class='questions-inputs'>
                            <h4 class='question-title'>Washing</h4>
                            <input type='radio' name='bathroom-washing' id='bathroom-shower' value='Shower'/>
                            <label for='bathroom-shower' class='radio-btn-label'>Shower</label>
                            <br>
                            <input type='radio' name='bathroom-washing' id='bathroom-tub' value='Soaking-Tub'/>
                            <label for='bathroom-tub' class='radio-btn-label'>Soaking Tub</label>
                            <br>
                            <input type='radio' name='bathroom-washing' id='bathroom-mix' value='Mix'/>
                            <label for='bathroom-mix' class='radio-btn-label'>Mix</label>
                        </div>
                    </div>
                    <div class='questions-box inactive' id='apartment-basement'>
                        <h3>Basement</h3>
                        <div class='questions-inputs'>
                            <h4 class='question-title'>Does Not Apply</h4>
                        </div>
                    </div>
                    <div class='questions-box inactive' id='apartment-patio'>
                        <h3>Patio</h3>
                        <div class='questions-inputs'>
                            <h4 class='question-title'>Does Not Apply</h4>
                        </div>
                    </div>
                    <div class='questions-box inactive' id='apartment-mudRoom'>
                        <h3>Mud Room</h3>
                        <div class='questions-inputs'>
                            <h4 class='question-title'>Does Not Apply</h4>
                        </div>
                    </div>
                    <div class='questions-box fw' id='apartment-textarea'>
                        <h3>Extra Comments</h3>
                        <div class='questions-inputs'>
                            <h4 class='question-title'>Do you need to provide more information? Write it below</h4>
                            <textarea id='apartment-extra-comments' name='apartment-extra-comments' class='question-textarea' rows='5' maxlength='400'>${extraComments ? extraComments : 'Enter comments here..'}</textarea>
                            <h5>Max 400 characters</h5>
                        </div>
                    </div>
                    <div class='questions-box' id='apartment-verify'>
                        <h3>Verify</h3>
                        <div class='questions-inputs'>
                            <h4 class='question-title'>Have you input all the data you want?</h4>
                            <input type='radio' name='verify' id='verify-yes' value='Yes'/>
                            <label for='verify-yes' class='radio-btn-label'>Yes, I'm ready</label>
                            <br>
                            <input type='radio' name='verify' id='verify-no' value='No'/>
                            <label for='verify-no' class='radio-btn-label'>No, but it is okay</label>
                        </div>
                    </div>
                    <div class='submit-btn-div'>
                        <button type='submit' class='submit-btn' id='submit-next-btn'>Next</button>
                    </div>
                    <a href='/#/' class='back-to-result'>Back to Previous Page</a>
                    
                </form>
            </div>`;
    },
};

export default ApartmentScreen;
