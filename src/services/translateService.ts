const translateText = async (
  text: string,
  targetLanguage: string
): Promise<string | undefined> => {
  const apiKey = "AIzaSyD0ySTupqHGbm0HXId9m4VB50d3jD1Yn-U";
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  const data = {
    q: text,
    target: targetLanguage,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const translatedText = result.data.translations[0].translatedText;
    console.log("Translated text:", translatedText);
    return translatedText;
  } catch (error) {
    console.error("Error fetching translation:", error);
  }
};

export default translateText;
