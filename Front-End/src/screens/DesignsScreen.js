import { getDesigns } from "../api";

const DesignsScreen = {
    after_render: async () => {
    },
    render: async () => {
        const designs = await getDesigns();
        return `
            <div class='overall-questions'>
                <h2>The Designs</h2>
                <p class='questions-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div class='dashboard-content'>
                    <div class='design-list'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>PROJECT NAME</th>
                                    <th>CLIENT NAME</th>
                                    <th>PROJECT LOCATION</th>
                                    <th class='Data-Inactive'>LIVING ROOM STYLE</th>
                                    <th class='Data-Inactive'>KITCHEN APPLIANCES</th>
                                    <th class='Data-Inactive'>DINNING ROOM STYLE</th>
                                    <th class='Data-Inactive'>BEDS</th>
                                    <th class='Data-Inactive'>BASEMENT</th>
                                    <th class='Data-Inactive'>PATIO AMENITIES</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${designs.map((design) => `
                                    <tr>
                                        <td>${design._id.slice(design._id.length - 5)}</td>
                                        <td>${design.projectName}</td>
                                        <td>${design.clientName}</td>
                                        <td>${design.projectAddress.projectCountry}</td>
                                        <td  class='Data-Inactive'>${design.projectLiving.style}</td>
                                        <td  class='Data-Inactive'>${design.projectKitchen.appliances}</td>
                                        <td  class='Data-Inactive'>${design.projectDinning.style}</td>
                                        <td  class='Data-Inactive'>${design.projectBedrooms.quantityPeople}</td>
                                        <td  class='Data-Inactive'>${design.projectBasement.usage}</td>
                                        <td  class='Data-Inactive'>${design.projectPatio.ammenities}</td>
                                    </tr>`).join('\n')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>`;
    },
};

export default DesignsScreen;
