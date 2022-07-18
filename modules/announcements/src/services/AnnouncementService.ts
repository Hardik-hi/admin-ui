import axios from "axios";
import qs from "qs";

const baseUrl = "http://localhost:3000/api/v1/announcements/";

//TO-DO: Add pagination support
export const fetchAnnouncements = async () => {
  return await axios
    .get(`${baseUrl}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const fetchAnnouncement = async (id: any) => {
  return await axios
    .get(`${baseUrl}${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const createAnnouncement = async (announcementData: any) => {
  var formData = qs.stringify(announcementData);
  console.log(formData);
  //TO-DO: Convert [] in additionalFields to {}
  return await axios
    .post(baseUrl, formData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => {
      return res.data;
    });
};
export const updateAnnouncement = async (announcementData: any) => {
  return await axios
    .put(`${baseUrl}${announcementData?.announcementId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: JSON.stringify(announcementData),
    })
    .then((res) => {
      return res.data;
    });
};
export const deleteAnnouncement = async (id: any) => {
  return await axios
    .delete(`${baseUrl}${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      return res.data;
    });
};
