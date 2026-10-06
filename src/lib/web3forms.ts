// Web3Forms configuration.
//
// NOTE: The access key is a PUBLIC key by design — it only authorizes form
// submissions to the inbox it was created for (consulta@taniaono.com). It is
// safe to ship in the client bundle, exactly like Formspree/Netlify form IDs.
// It is NOT a secret and does not grant access to read submissions.
//
// To rotate the key or point submissions to a different inbox, create a new
// access key at https://web3forms.com and replace the value below (or set
// VITE_WEB3FORMS_KEY in the build environment).
export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY ?? "87a06d16-66f5-45c2-9230-41343a2816d2";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
