export const sendLeadEmail = async (lead: Lead) => {
  try {
    const response = await fetch('/api/send-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
    });
    
    if (!response.ok) {
      throw new Error('Failed to send lead');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending lead:', error);
    return false;
  }
};