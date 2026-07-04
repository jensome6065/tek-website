/**
 * Companies and organizations where TEK members intern, work,
 * conduct research, or have received offers.
 * Logos are direct URLs  -  no third-party logo APIs.
 */
export interface FeaturedCompany {
  id: string;
  name: string;
  logoUrl: string;
  opportunities: string;
}

export const featuredCompanies: FeaturedCompany[] = [
  {
    id: "mgb",
    name: "Mass General Brigham",
    logoUrl:
      "https://nmfonline.org/wp-content/uploads/2022/01/Mass-General-Brigham-Logo.png",
    opportunities: "Internships & research",
  },
  {
    id: "medtronic",
    name: "Medtronic",
    logoUrl:
      "https://www.onit.com/wp-content/uploads/2025/12/medtronic-logo-combined.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "citadel",
    name: "Citadel",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Citadel_LLC_Logo.svg/3840px-Citadel_LLC_Logo.svg.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "mks",
    name: "MKS Instruments",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/MKS_Instruments_logo.svg/3840px-MKS_Instruments_logo.svg.png",
    opportunities: "Internships",
  },
  {
    id: "hanover",
    name: "The Hanover Insurance Group",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hanover_Insurance_logo.svg/3840px-Hanover_Insurance_logo.svg.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "comcast",
    name: "Comcast NBCUniversal",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Comcast_NBCUniversal_logo.svg/3840px-Comcast_NBCUniversal_logo.svg.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "wyebot",
    name: "Wyebot",
    logoUrl:
      "https://vita-learn.org/wp-content/uploads/2024/06/primary-fullColor.png",
    opportunities: "Internships",
  },
  {
    id: "ibm",
    name: "IBM",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "dtcc",
    name: "DTCC",
    logoUrl:
      "https://cdn.cookielaw.org/logos/751749a6-c2f4-4385-890c-83226f749435/0192a0ec-6f90-7c90-b811-fac24b6c01f6/9a693b73-a402-43ea-be61-d1cc077e0314/dtcc-wordmark-huntergreen.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "ey",
    name: "EY",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/250px-EY_logo_2019.svg.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "otelier",
    name: "Otelier",
    logoUrl:
      "https://go.otelier.io/hubfs/OT-logo.png",
    opportunities: "Internships",
  },
  {
    id: "cargurus",
    name: "CarGurus",
    logoUrl:
      "https://s3.amazonaws.com/company-photo.theladders.com/19834/833b595c-8849-4db8-9549-b27072b6937c.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "ipsen",
    name: "Ipsen",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_Ipsen.jpg",
    opportunities: "Internships & full-time",
  },
  {
    id: "nuwc",
    name: "Naval Undersea Warfare Center",
    logoUrl:
      "https://www.navsea.navy.mil/Portals/103/Images/Warfare_Centers/WC%20LOGO%20NEW-400px.png?ver=2dK7_0hhRHfOF6ea3kJBOw%3D%3D",
    opportunities: "Internships & research",
  },
  {
    id: "nintendo",
    name: "Nintendo",
    logoUrl:
      "https://www.hatchwise.com/wp-content/uploads/2023/02/image-48.png",
    opportunities: "Internships",
  },
  {
    id: "acadia",
    name: "Acadia Pharmaceuticals",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ySDdTgfSe-B6RMWRyPVzbGrE14QbFxVeX_e_Lac-xTGZW5IENuiUFqP4&s=10",
    opportunities: "Internships",
  },
  {
    id: "ymc",
    name: "YMC America",
    logoUrl:
      "https://www.ymcamerica.com/wp-content/uploads/2025/01/Logo_YMC_America_CMYK-474x220.png",
    opportunities: "Internships",
  },
  {
    id: "mira",
    name: "MIRA",
    logoUrl:
      "https://pbs.twimg.com/profile_images/2031444124361269248/tyfW4ZW6_400x400.jpg",
    opportunities: "Internships",
  },
  {
    id: "ccc",
    name: "CCC Intelligent Solutions",
    logoUrl:
      "https://marketplace.guidewire.com/sfc/servlet.shepherd/version/download/0683n00000ShXv5AAF",
    opportunities: "Internships & full-time",
  },
  {
    id: "ringlet",
    name: "Ringlet",
    logoUrl:
      "https://media.licdn.com/dms/image/v2/D4E0BAQHAu7Te_VXuRQ/company-logo_200_200/company-logo_200_200/0/1682702952445/getringlet_logo?e=2147483647&v=beta&t=fLMsSTEmppxlsNKK2cZlrqu_gdGTlqeutwKNgEaxx_g",
    opportunities: "Internships",
  },
  {
    id: "aws",
    name: "AWS",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/960px-Amazon_Web_Services_Logo.svg.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "mt-bank",
    name: "M&T Bank",
    logoUrl:
      "https://logos-world.net/wp-content/uploads/2023/02/MT-Bank-Logo.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "umass",
    name: "UMass Amherst",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXiMqp0naqiBDu9QFCmgIT0XYQREY4onjqfAxsniXIIfa2tiMzMZ0QtM&s=10",
    opportunities: "Research & campus roles",
  },
  {
    id: "philips",
    name: "Philips",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Philips_logo_new.svg/1280px-Philips_logo_new.svg.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "nasa",
    name: "NASA",
    logoUrl:
      "https://logos-world.net/wp-content/uploads/2020/05/NASA-Logo-1975-1992.png",
    opportunities: "Internships & research",
  },
  {
    id: "google",
    name: "Google",
    logoUrl:
      "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "utd",
    name: "University of Texas at Dallas",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/UT_Dallas_2_Color_Emblem_-_SVG_Brand_Identity_File.svg/960px-UT_Dallas_2_Color_Emblem_-_SVG_Brand_Identity_File.svg.png?_=20191002052426",
    opportunities: "Research & academic",
  },
  {
    id: "dell",
    name: "Dell",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "loman",
    name: "Loman",
    logoUrl:
      "https://mms.businesswire.com/media/20250826992233/en/2562012/22/Lomanblack.jpg",
    opportunities: "Internships",
  },
  {
    id: "thirdlayer",
    name: "ThirdLayer",
    logoUrl:
      "https://www.thirdlayer.inc/thirdlayer-logo.svg",
    opportunities: "Internships",
  },
  {
    id: "wells-fargo",
    name: "Wells Fargo",
    logoUrl:
      "https://logos-world.net/wp-content/uploads/2020/10/Wells-Fargo-Logo-1996.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "onto",
    name: "Onto Innovation",
    logoUrl:
      "https://companieslogo.com/img/orig/ONTO-811cc391.png?t=1744002008",
    opportunities: "Internships",
  },
  {
    id: "privateer",
    name: "Privateer",
    logoUrl:
      "https://awsmp-logos.s3.amazonaws.com/7c9f877f-b1ab-498b-9070-d8be7c24310e/5cacae8b62a92e827a8751caa892c841.png",
    opportunities: "Internships",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/3840px-Salesforce.com_logo.svg.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "netapp",
    name: "NetApp",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/NetApp_logo_2020.svg/1280px-NetApp_logo_2020.svg.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "sanofi",
    name: "Sanofi",
    logoUrl:
      "https://companieslogo.com/img/orig/SNY_BIG-4ddda10b.png?t=1720244494",
    opportunities: "Internships & research",
  },
  {
    id: "eclinicalworks",
    name: "eClinicalWorks",
    logoUrl:
      "https://static.cdnlogo.com/logos/e/26/eclinicalworks.svg",
    opportunities: "Internships & full-time",
  },
  {
    id: "bms",
    name: "Bristol Myers Squibb",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Bristol-Myers_Squibb_logo.svg",
    opportunities: "Internships & full-time",
  },
  {
    id: "motorola",
    name: "Motorola",
    logoUrl:
      "https://1000logos.net/wp-content/uploads/2017/04/Motorola-Logo.png",
    opportunities: "Internships",
  },
  {
    id: "citizens",
    name: "Citizens Bank",
    logoUrl:
      "https://logodownload.org/wp-content/uploads/2021/03/citizens-logo-2.png",
    opportunities: "Internships & full-time",
  },
  {
    id: "fidelity",
    name: "Fidelity Investments",
    logoUrl:
      "https://info.nrao.edu/hr/retirement-planning/images/Fidelity_Investments.png/image",
    opportunities: "Internships & full-time",
  },
  {
    id: "fanz",
    name: "FanZ",
    logoUrl:
      "https://esportspod.gg/wp-content/uploads/2021/12/Picture1.png",
    opportunities: "Internships",
  },
  {
    id: "chewy",
    name: "Chewy",
    logoUrl:
      "https://companieslogo.com/img/orig/CHWY_BIG-01a8d5d3.png?t=1720244491",
    opportunities: "Internships & full-time",
  },
  {
    id: "amazon",
    name: "Amazon",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png",
    opportunities: "Internships & full-time",
  },
];
