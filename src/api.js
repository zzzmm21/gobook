import axios from 'axios';

export async function getArticle(search = '') {
  const response = await fetch(`https://learn.codeit.kr/1636/foods?${search}`);
  if (!response.ok) {
    throw new Error('불러오는데 실패하였습니다');
  }
  const body = await response.json();
  return body;
}

export async function createArticle(formData) {
  const response = await fetch('https://learn.codeit.kr/1636/foods', {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('생성하는데 실패하였습니다');
  }
  const body = await response.json();
  return body;
}

// export async function getArticle(search = "") {
//   const response = await fetch("/articles");
//   if (!response.ok) {
//     throw new Error("불러오는데 실패하였습니다");
//   }
//   const body = await response.json();
//   return body;
// }

// export async function createArticle(formData) {
//   const response = await fetch("/api/articles", {
//     method: "POST",
//     body: formData,
//   });
//   if (!response.ok) {
//     throw new Error("생성하는데 실패하였습니다");
//   }
//   const body = await response.json();
//   return body;
// }

export async function updateArticle(id, formData) {
  const response = await fetch(`https://learn.codeit.kr/1636/foods/${id}`, {
    method: 'PUT',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('수정하는데 실패하였습니다');
  }
  const body = await response.json();
  return body;
}

export async function deleteArticle(id) {
  const response = await fetch(`https://learn.codeit.kr/1636/foods/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('삭제에 실패하였습니다');
  }
  const body = await response.json();
  return body;
}

export async function getComments({ order = 'createdAt' }) {
  // 쿼리 지정(정렬)
  const query = `order=${order}`;
  const response = await fetch(
    `https://learn.codeit.kr/4514/film-reviews?${query}`
  );
  if (!response.ok) {
    throw new Error('코멘트를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function createComment(formData) {
  const response = await fetch('https://learn.codeit.kr/4514/film-reviews/', {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('생성하는데 실패하였습니다');
  }
  const body = await response.json();
  return body;
}

export async function updateComment(id, formData) {
  try {
    const response = await axios.put(
      `https://learn.codeit.kr/4514/film-reviews/${id}`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error('수정하는데 실패하였습니다');
  }
}

export async function deleteComment(id) {
  try {
    const response = await axios.delete(
      `https://learn.codeit.kr/4514/film-reviews/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error('삭제에 실패하였습니다');
  }
}

export async function getMeetings() {
  try {
    const response = await axios.get('/api/meeting/all');
    return response.data;
  } catch (error) {
    throw new Error('모임 데이터를 불러오는데 실패했습니다');
  }
}

export async function createMeetings(formData) {
  try {
    const response = await axios.post('/api/meeting/create', formData);
    return response.data;
  } catch (error) {
    throw new Error('생성하는데 실패하였습니다');
  }
}

// 유저별 모임 조회
export async function getUserMeetings(userId) {
  try {
    const response = await axios.get(`/api/meetings/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('모임 데이터를 불러오는데 실패했습니다');
  }
}

// 모든 모임 회차 조회
export async function getAllOrders() {
  try {
    const response = await axios.get('/api/meeting/allorders');
    return response.data;
  } catch (error) {
    throw new Error('모임 데이터를 불러오는데 실패했습니다');
  }
}

// 모임별 회차 조회
export async function getOrdersByNo(no) {
  try {
    const response = await axios.get(`/api/meeting/${no}/orders`);
    return response.data;
  } catch (error) {
    throw new Error('모임 데이터를 불러오는데 실패했습니다');
  }
}

export async function insertMember(no, body) {
  try {
    const response = await axios.post(`/api/meeting/${no}/register`, body);
    return response.data;
  } catch (error) {
    throw new Error('생성하는데 실패하였습니다');
  }
}

export async function getAllMembersByNo(no) {
  try {
    const response = await axios.get(`/api/meeting/admin/${no}/allmembers`);
    return response.data;
  } catch (error) {
    throw new Error('모임 데이터를 불러오는데 실패했습니다');
  }
}
