import AccessToken from "models/AccessToken";
import User from "models/User";
import { NextResponse } from "next/server";
import { sendEmailWithEmailJs } from "services/NotificationService";
import { emailMetadata, userStatus, userTokenStatus } from "utils/constants";

export async function GET(req, { params: { token } }) {
  const userAccessToken = await AccessToken.findById(token).populate("owner");
  const user = userAccessToken.owner;

  // TODO add the token validity check
  /*TODO and token type check to be sure that a Email Validation token 
    is not used for reset password */

  if (!userAccessToken) {
    return NextResponse.redirect("http://localhost:3000/login?badRequest=true");
  } else if (userAccessToken.status === userTokenStatus.UNUSED) {
    const activeUser = await User.findByIdAndUpdate(user._id, {
      status: userStatus.ACTIVE,
    });
    console.log("Actived User >> ", activeUser);
    await AccessToken.findByIdAndUpdate(userAccessToken._id, {
      status: userTokenStatus.USED,
    });

    return NextResponse.redirect("http://localhost:3000/login?actived=true");
  } else {
    await sendEmailWithEmailJs({
      receiver: user,
      subject: emailMetadata.SUBJECT_EMAIL_VALIDATION,
      validationLink: emailMetadata.EMAIL_VALIDATION_LINK,
    });

    return NextResponse.redirect(
      "http://localhost:3000/validate-email?tokenExpired=true"
    );
  }
}
