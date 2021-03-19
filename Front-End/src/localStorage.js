/* Basic Info Setup */
export const getBasicInfo = () => {
    const basicInfo = localStorage.getItem('basicInfo') ? JSON.parse(localStorage.getItem('basicInfo')) : [];
    return basicInfo;
};
export const setBasicInfo = ({
    projectName = '',
    clientName = '',
    projectAddress = {
        projectStreet: '',
        projectCity: '',
        projectCountry: '',
    },
    projectHomeType = '',
    projectType = '',
    projectEnvironment = '',
  }) => {
      localStorage.setItem('basicInfo', JSON.stringify({
        projectName,
        clientName,
        projectAddress,
        projectHomeType,
        projectType,
        projectEnvironment,
      }));
  };

  /* Design by Room Setup */
export const getDefineRoomInfo = () => {
    const defineRoomInfo = localStorage.getItem('defineRoomInfo') ? JSON.parse(localStorage.getItem('defineRoomInfo')) : [];
    return defineRoomInfo;
};
export const setDefineRoomInfo = ({
    projectLiving = {
        style: '',
        quantityPeople: '',
        millwork: 'test',
    },
    projectKitchen = {
        kitchenIsland: '',
        appliances: '',
        kitchenShelves: '',
    },
    projectDinning = {
        style: '',
        quantityPeople: '',
        millwork: '',
    },
    projectBedrooms = {
        quantityPeople: '',
    },
    projectPowderRoom = {
        vanity: '',
    },
    projectBathrooms = {
        washing: '',
    },
    projectBasement = {
        usage: '',
    },
    projectPatio = {
        ammenities: '',
    },
    projectMudRoom = {
        storage: '',
    },
    extraComments = '',
  }) => {
      localStorage.setItem('defineRoomInfo', JSON.stringify({
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
      }));
  };
  /* Inspiration Pictures Setup */
export const getInspirationImages = () => {
    const inspoImages = localStorage.getItem('inspoImages') ? JSON.parse(localStorage.getItem('inspoImages')) : [];
    return inspoImages;
};
export const setInspirationImages = ({
    inspoImage01 = '',
    inspoImage02 = '',
    inspoImage03 = '',
  }) => {
      localStorage.setItem('inspoImages', JSON.stringify({
        inspoImage01,
        inspoImage02,
        inspoImage03,
      }));
  };
 /* Submit Whole Design */

 /* Functions to Clean Design */
 export const cleanBasicInfo = () => {
    localStorage.removeItem('basicInfo');
  };
 export const cleanDesignInfo = () => {
    localStorage.removeItem('defineRoomInfo');
    };
export const cleanInspirationImages = () => {
    localStorage.removeItem('inspoImages');
    };
