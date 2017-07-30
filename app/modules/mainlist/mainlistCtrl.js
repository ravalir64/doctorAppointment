'use strict';

angular.module('yeomanApp')
    .controller('mainlistCtrl', function($http) {
        var vm = this;
        vm.doctorlist1 = [{
                "id": "14525",
                "doc_name": "Dr. Amar V",
                "doc_logo": "1442905565ar-vennapusa-hyderabad.JPG",
                "link": "dr-amar-v-bariatric-metabolic-surgery-doctor-hyderabad",
                "qualification": "FNB(Minimal Access Surgery), MS(Gen), DNB, MRCSEd",
                "gender": "male",
                "spec_name_doc": "Bariatric & Metabolic Surgeon",
                "location": " Atlanta",
                "experience": " 7 Years Experience",
                "hospital": " citwin Hospital",
                "recomentations": " 9 Recommendations"
            },
            {
                "id": "31706",
                "doc_name": "Dr. Padmaja Divakar",
                "doc_logo": "1428574198dmaja-divakar-bangalore.JPG",
                "link": "dr-padmaja-divakar-infertility-doctor-hyderabad",
                "qualification": "MBBS, DGO",
                "gender": "female",
                "spec_name_doc": "IVF & Infertility Specialist",
                "location": " Atlanta",
                "experience": " 7 Years Experience",
                "hospital": " citwin Hospital",
                "recomentations": " 9 Recommendations"

            },
            {
                "id": "41239",
                "doc_name": "Dr. Harish Jayaram",
                "doc_logo": "1441278375rish-jayaram-hyderabad.JPG",
                "link": "dr-harish-jayaram-pediatric-surgeon-hyderabad",
                "qualification": "MBBS, MS, M.Ch",
                "gender": "male",
                "spec_name_doc": "Pediatric Surgeon",
                "location": " Atlanta",
                "experience": " 7 Years Experience",
                "hospital": " citwin Hospital",
                "recomentations": " 9 Recommendations"
            },
            {
                "id": "47053",
                "doc_name": "Dr. Sanjeev K. Gupta",
                "doc_logo": "1437987348njeev-gupta-hyderabad.jpg",
                "link": "dr-sanjeev-k-gupta-radiation-oncologist-hyderabad",
                "qualification": "MD (Radiation Oncology)",
                "gender": "male",
                "spec_name_doc": "Radiation Oncologist",
                "location": " Atlanta",
                "experience": " 7 Years Experience",
                "hospital": " citwin Hospital",
                "recomentations": " 9 Recommendations"
            },
            {
                "id": "48864",
                "doc_name": "Dr.B. Somaraju",
                "doc_logo": "1478150872maraju-hyderabad.jpg",
                "link": "dr-b-somaraju-cardiologist-hyderabad",
                "qualification": "MBBS, MD, DM, Ph.D",
                "gender": "male",
                "spec_name_doc": "Cardiologist",
                "location": " Atlanta",
                "experience": " 7 Years Experience",
                "hospital": " citwin Hospital",
                "recomentations": " 9 Recommendations"
            },
            {
                "id": "52291",
                "doc_name": "Dr. Sachin Daga",
                "doc_logo": "1460450419chin-daga-hyderabad.JPG",
                "link": "dr-sachin-daga-liver-transplant-and-hepatobiliary-surgeon-hyderabad",
                "qualification": "MBBS, M.S(Gen Sureg), DNB(GI Surgery), MNAMS (Surgical Gastro)",
                "gender": "male",
                "spec_name_doc": "Liver Transplant & Hepatobiliary Surgeon",
                "location": " Atlanta",
                "experience": " 7 Years Experience",
                "hospital": " citwin Hospital",
                "recomentations": " 9 Recommendations"
            },
            {
                "id": "67503",
                "doc_name": "Dr.K. Syed Akram",
                "doc_logo": "14739415940160914_142947_-_Copy.jpg",
                "link": "dr-k-syed-akram-radiation-oncologist-hyderabad",
                "qualification": "MBBS, MD",
                "gender": "male",
                "spec_name_doc": "Radiation Oncologist",
                "location": " Atlanta",
                "experience": " 7 Years Experience",
                "hospital": " citwin Hospital",
                "recomentations": " 9 Recommendations"
            },
            {
                "id": "73951",
                "doc_name": "Dr.M. Vikas Gowd",
                "doc_logo": "1499921389asgowd1.jpg",
                "link": "dr-m-vikas-gowd-dentist-hyderabad",
                "qualification": "MDS",
                "gender": "male",
                "spec_name_doc": "Dentist",
                "location": " Atlanta",
                "experience": " 7 Years Experience",
                "hospital": " citwin Hospital",
                "recomentations": " 9 Recommendations "
            },
            {
                "id": "89",
                "doc_name": "Dr. Mohana Vamsy",
                "doc_logo": "1337779237584dr.mohan-vamsy-hyderabad.jpg",
                "link": "dr-mohana-vamsy-oncologist-hyderabad",
                "qualification": "MBBS, MS,DNB, MCh(Surg. Onco), FRCS(Edin)",
                "gender": "male",
                "spec_name_doc": "Oncologist",
                "location": " Atlanta",
                "experience": " 7 Years Experience",
                "hospital": " citwin Hospital",
                "recomentations": " 9 Recommendations"
            },
            {
                "id": "91",
                "doc_name": "Dr. Nirni Sharanabasappa Somanath",
                "doc_logo": "1361435852585dr-nirni-somnath-hyderabad.gif",
                "link": "dr-nirni-sharanabasappa-somanath-medical-oncologist-hyderabad",
                "qualification": "MBBS, MD (Internal Medicine), DM (Haemato-Oncology)",
                "gender": "male",
                "spec_name_doc": "Medical Oncologist",
                "location": " Chicago",
                "experience": " 6 Years Experience",
                "hospital": " Duke Hospital",
                "recomentations": " 8 Recommendations"
            }
        ]

        function onInit() {
            $http.get("http://localhost:3000/api/doctors").then(function(data) {
                vm.doctorlist = data.data;
                console.log("doctorlist", data)
            });
        }
        onInit()
    });