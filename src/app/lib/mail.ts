import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({

  service: "gmail",

  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },

});


function escapeHTML(text = "") {

  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}



export async function sendAutoReply({
  name,
  email,
}) {


  await transporter.sendMail({

    from:
    `"STACKRA TECHNOLOGIES" <${process.env.GMAIL_USER}>`,


    to: email,


    subject:
    "We've received your project inquiry | STACKRA TECHNOLOGIES",


    html: `

    <div style="
    font-family:Arial;
    padding:30px;
    color:#333;
    ">


    <h2>
    Hello ${escapeHTML(name)} 👋
    </h2>


    <p>
    Thank you for contacting
    <strong>
    STACKRA TECHNOLOGIES
    </strong>.
    </p>


    <p>
    Your project inquiry has been successfully received.
    </p>


    <p>
    Our team will review your requirements and reply within 24 hours.
    </p>


    <br/>


    <strong>
    Regards
    </strong>


    <br/>


    Mohammed Khan

    <br/>

    Founder

    <br/>

    STACKRA TECHNOLOGIES


    </div>

    `

  });

}





export async function sendFounderEmail(data) {


  await transporter.sendMail({

    from:
    `"STACKRA Website" <${process.env.GMAIL_USER}>`,


    to:
    process.env.ADMIN_EMAIL,


    replyTo:
    data.email,


    subject:
    `🚀 New Project Inquiry - ${data.name}`,


    html:`


    <div style="font-family:Arial">


    <h2>
    New Project Inquiry
    </h2>


    <table border="1"
    cellpadding="10"
    cellspacing="0">


    <tr>
    <td>Name</td>
    <td>${escapeHTML(data.name)}</td>
    </tr>


    <tr>
    <td>Email</td>
    <td>${escapeHTML(data.email)}</td>
    </tr>


    <tr>
    <td>Phone</td>
    <td>${escapeHTML(data.phone || "-")}</td>
    </tr>


    <tr>
    <td>Company</td>
    <td>${escapeHTML(data.company || "-")}</td>
    </tr>


    <tr>
    <td>Service</td>
    <td>${escapeHTML(data.service)}</td>
    </tr>


    <tr>
    <td>Budget</td>
    <td>${escapeHTML(data.budget || "-")}</td>
    </tr>


    <tr>
    <td>Message</td>
    <td>${escapeHTML(data.message)}</td>
    </tr>


    </table>


    </div>


    `

  });

}