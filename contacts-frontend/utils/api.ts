const API_URL = '/api/contacts'; // Zakładając użycie proxy

export const fetchContacts = async (): Promise<Contact[]> => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createContact = async (contact: Omit<Contact, 'id'>): Promise<Contact> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });

  if (!response.ok) {
    throw new Error('Failed to create contact');
  }

  return response.json();
};

export const updateContact = async (id: number, contactData: Partial<Omit<Contact, 'id'>>): Promise<Contact> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });

  if (!response.ok) {
    throw new Error('Failed to update contact');
  }

  return response.json();
};

export const deleteContact = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete contact');
  }
};
