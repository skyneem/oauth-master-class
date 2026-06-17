window.onload = () => {
  document.getElementById("suggest").onclick = () => {
  window.YaAuthSuggest.init(
      {
        client_id: "138a60685aa94950933cab890897ac6b",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-jet.vercel.app/token.html",
      },
      "https://oauth-master-class-jet.vercel.app",
      {
        parentId: "buttonContainer",
        view: "button",
        buttonTheme: "light",
        buttonSize: "xs",
        buttonBorderRadius: 20,
      }
    )
      .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
};
};
