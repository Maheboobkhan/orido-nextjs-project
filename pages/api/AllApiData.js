import axios from 'axios';
const userId = '65b3a22c01d900e96c4219ae';

export async function fetchAllData() {
    try {
      const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
      return response.data.user.projects;
    } catch (error) {
      console.error('Error fetching services data:', error);
      return [];
    }
  }

  export async function fetchProjectsData() {
    try {
      const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
      return response.data.user.projects;
    } catch (error) {
      console.error('Error fetching services data:', error);
      return [];
    }
  }

export async function fetchServicesData() {
  try {
    const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
    // console.log(response.data.user.services);
    return response.data.user.services;
  } catch (error) {
    console.error('Error fetching services data:', error);
    return [];
  }
}

export async function fetchSkillsData() {
  try {
    const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
    // console.log(response.data.user.skills);
    return response.data.user.skills;
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return null;
  }
}

export async function fetchHerosData() {
  try {
    const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
    console.log(response);
    return response.data.user.about;
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return null;
  }
}

export async function fetchAvatarData() {
  try {
    const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
    console.log(response);
    return response.data.user.about.avatar;
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return null;
  }
}

export async function fetchSocialHandlesData() {
  try {
    const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
    // console.log(response.data.user.social_handles);
    return response.data.user.social_handles;
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return null;
  }
}

export async function fetchFeedbackData() {
  try {
    const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
    // console.log(response.data.user.social_handles);
    return response.data.user.testimonials;
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return null;
  }
}

export async function fetchBlogData() {
  try {
    const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
    // console.log(response.data.user.social_handles);
    return response.data.user.timeline;
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return null;
  }
}

export async function fetchWebsiteLogo() {
  try {
    const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
    // console.log(response.data.user.social_handles);
    return response.data.user.testimonials[0].image.url;
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return null;
  }
}

export async function fetchEmailData() {
  try {
    const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
    // console.log(response.data.user.social_handles);
    return response.data.user.email;
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return null;
  }
}
