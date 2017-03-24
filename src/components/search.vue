<template>
    <div class="search-form">
        <input placeholder="Type to search" v-model:value="value" @input="search">
        <div class="results">
            <div v-for="result in topResults">
                <result :name="result.name" :link="result.link"></result>
            </div>
        </div>
    </div>
</template>

<script>
  import result from '../components/result.vue'
  import Fuse from 'fuse.js'

  export default {
    components: {
      result
    },
    data: function () {
      return {
        value: '',
        results: [],
        options: {
          shouldSort: true,
          threshold: 0.3,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
            'name',
            'link',
            'terms'
          ]
        },
        links: [
          {
            name: 'Harding Homepage',
            link: 'http://www.harding.edu/'
          },
          {
            name: 'Pipeline',
            link: 'https://pipeline-old.harding.edu'
          },
          {
            name: 'New Pipeline',
            link: 'https://pipeline.harding.edu'
          },
          {
            name: 'Canvas',
            link: 'https://harding.instructure.com/'
          },
          {
            name: 'Computer science portal',
            link: 'http://cs.harding.edu/'
          },
          {
            name: 'EASEL',
            link: 'https://cs.harding.edu/easel/cgi-bin/index'
          },
          {
            name: 'Microsoft IMAGINE',
            link: 'http://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx?ws=5bbb0d2d-3770-e011-971f-0030487d8897&vsro=8&JSEnabled=1'
          },
          {
            name: 'Campus Box',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zwlkcomb.P_DispInfo',
            terms: [
              'Mail'
            ]
          },
          {
            name: 'Account Information',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=z_cashnet_sso.p_cashnet_login',
            terms: [
              'Finance'
            ]
          },
          {
            name: 'Schedule Planner',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=csched.p_redirect',
            terms: [
              'Register',
              'Class'
            ]
          },
          {
            name: 'Schedule Planner Cart',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=csched.p_regs_ssb',
            terms: [
              'Register',
              'Class'
            ]
          },
          {
            name: 'Campus Dish',
            link: 'https://harding.campusdish.com/',
            terms: [
              'Cafeteria',
              'Meal'
            ]
          },
          {
            name: 'Schedule by day and time',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwskfshd.P_CrseSchd',
            terms: [
              'Class'
            ]
          },
          {
            name: 'Detail schedule',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwskfshd.P_CrseSchdDetl',
            terms: [
              'Class'
            ]
          },
          {
            name: 'Spring break missions',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zbproot.P_SB_Entry'
          },
          {
            name: 'Global outreach missions',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zbproot.P_GO_Entry'
          },
          {
            name: 'International programs',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zbproot.P_IP_Entry'
          },
          {
            name: 'NiMA internships',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zbproot.P_NIMA_Entry'
          },
          {
            name: 'Update phone and address',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwgkogad.P_SelectAtypUpdate'
          },
          {
            name: 'View emergency contacts',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwgkoemr.P_ViewEmrgContacts'
          },
          {
            name: 'Name change info',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwgkoinf.P_DispUpdName'
          },
          {
            name: 'SSN change info',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwgkoinf.P_DispUpdSSN'
          },
          {
            name: 'Directory profile',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwgkoprf.P_ShowDiroItems'
          },
          {
            name: 'Social clubs',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=szpsocc.P_SocCStudentGateway'
          },
          {
            name: 'Parking permit instructions',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zwlkvehi.P_DispInfo'
          },
          {
            name: 'Text message opt-in',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=hutextmsg.p_start'
          },
          {
            name: 'Update ethnicity and race',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwgkomre.P_SelectEthnicityRace'
          },
          {
            name: 'Review my financial aid',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwrkrhst.P_DispAwdAidYear'
          },
          {
            name: 'SafeConnect Dashboard',
            link: 'https://10.5.1.1:8443/dashboard.do',
            terms: [
              'DormNet'
            ]
          },
          {
            name: 'Q Ware',
            link: 'https://www2.quecentre.com/harding/Login.aspx?ReturnUrl=%2fharding%2fDashboard.aspx',
            terms: [
              'DormNet'
            ]
          },
          {
            name: 'Harding Wiki',
            link: 'https://kenobi.harding.edu/dashboard.action',
            terms: [
              'Kenobi',
              'DormNet'
            ]
          },
          {
            name: 'Add/drop classes',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwskfreg.P_AltPin'
          },
          {
            name: 'Look up classes to add',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=szpclass.P_ShowClassesI'
          },
          {
            name: 'Change class options',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwskfreg.P_ChangeCrseOpt'
          },
          {
            name: 'Withdrawal information',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwrktivw.P_TitleIVWithdraw'
          },
          {
            name: 'Check your registration status',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwskrsta.P_RegsStatusDisp'
          },
          {
            name: 'Off-campus living application',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=szpoffc.P_Apply'
          },
          {
            name: 'Privileged housing/status',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zwskphap.P_StuEntry'
          },
          {
            name: 'Meal plan and DCB selection',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=szpmeal.P_SelectPlan'
          },
          {
            name: 'Enrollment verification certificate',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zwskecrt.redirect_nsc'
          },
          {
            name: 'Select chapel seat',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=szpseat.P_PickSeat'
          },
          {
            name: 'Vehicle registration',
            link: 'http://www.harding.edu/pts'
          },
          {
            name: 'View holds',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwskoacc.P_ViewHold'
          },
          {
            name: 'Chapel information',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zwskchpl.P_GetTerm'
          },
          {
            name: 'Class excuses',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zgpexcu.P_DisplayClasses'
          },
          {
            name: 'Check current grades',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zgpexcu.P_DisplayClasses'
          },
          {
            name: 'Midterm grades',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwskmgrd.p_write_term_selection'
          },
          {
            name: 'Final grades',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwskogrd.P_ViewTermGrde'
          },
          {
            name: 'Grade detail',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwsksmrk.p_write_term_selection'
          },
          {
            name: 'Academic suspension appeal',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=szpacsu.P_DisplayForm'
          },
          {
            name: 'Financial aid suspension appeal',
            link: 'http://www.harding.edu/assets/www/Provost/PDF/FA_Suspension_Appeal_Package.pdf'
          },
          {
            name: 'Display transcript',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwskotrn.P_ViewTermTran'
          },
          {
            name: 'Account summary by term',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zdpbala_test.P_View_Account'
          },
          {
            name: 'Select tax year',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwtktxys.p_get_tax_year'
          },
          {
            name: 'Tax notification',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwtktxns.p_disp_tax_notification'
          },
          {
            name: 'Degree evaluation',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwtktxns.p_disp_tax_notification'
          },
          {
            name: 'Dynamic catalog',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwskfcls.p_disp_dyn_ctlg'
          },
          {
            name: 'View bill',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=z_cashnet_sso.p_cashnet_login'
          },
          {
            name: 'Online payment',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=z_cashnet_sso.p_cashnet_login'
          },
          {
            name: 'Payment plan enrollment',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=z_cashnet_sso.p_cashnet_login'
          },
          {
            name: 'Check request for credit balance',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zwlkckrq.P_StuDisplayInfo'
          },
          {
            name: 'Global literacy waiver request',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=szpgltw.P_DisplayForm'
          },
          {
            name: 'Graduation application',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=bwskgrad.p_disp_grad_term'
          },
          {
            name: 'FERPA permission form',
            link: 'http://www.harding.edu/assets/www/provost/pdf/FERPA_Permission_Form.docx'
          },
          {
            name: 'Chapel student excuses',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zcpstex.p_entry'
          },
          {
            name: 'Airport shuttle',
            link: 'http://www.harding.edu/student-life/student-services/shuttle'
          },
          {
            name: 'Bison career search',
            link: 'http://www.harding.edu/academics/academic-support/career/jobsearch'
          },
          {
            name: 'Counseling center',
            link: 'http://www.harding.edu/counseling/'
          },
          {
            name: 'Course schedule',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=szpclass.P_ShowClassesI'
          },
          {
            name: 'Health services',
            link: 'http://www.harding.edu/healthservices/'
          },
          {
            name: 'Summer school',
            link: 'http://www.harding.edu/SummerSchool/'
          },
          {
            name: 'Public safety',
            link: 'http://www.harding.edu/DPS/'
          },
          {
            name: 'Public safety tip form',
            link: 'http://www.harding.edu/public-safety/tips'
          },
          {
            name: 'Emergency management',
            link: 'http://www.harding.edu/public-safety/emergency-management'
          },
          {
            name: 'Parking registration',
            link: 'http://www.harding.edu/public-safety/parking-registration'
          },
          {
            name: 'Transportation services',
            link: 'http://www.harding.edu/public-safety/transportation-services'
          },
          {
            name: 'Victims of sexual violence',
            link: 'http://www.harding.edu/public-safety/victims-of-sexual-violence'
          },
          {
            name: 'Inclement weather policy',
            link: 'http://www.harding.edu/assets/pipeline/provost/inclement-weather-policy.docx'
          },
          {
            name: 'Harding Facebook',
            link: 'http://www.facebook.com/HardingU'
          },
          {
            name: 'Harding Twitter',
            link: 'http://twitter.com/HardingU'
          },
          {
            name: 'Harding Library',
            link: 'http://www.harding.edu/library'
          },
          {
            name: 'Harding Catalog',
            link: 'http://harding.catalog.acalog.com/'
          },
          {
            name: 'Harding Gmail',
            link: 'https://pipeline-old.harding.edu/sso/google.php'
          },
          {
            name: 'Residence life handbook',
            link: 'https://www.harding.edu/assets/www/student-life/living-at-harding/pdf/residencelife-handbook.pdf'
          },
          {
            name: 'Student handbook',
            link: 'http://www.harding.edu/assets/www/student-life/pdf/student_handbook.pdf'
          },
          {
            name: 'Student payroll schedule',
            link: 'http://www.harding.edu/assets/www/hr/pdf/student-payroll-schedule.xlsx'
          },
          {
            name: 'Teacher evaluations',
            link: 'http://www.harding.edu/assets/www/hr/pdf/student-payroll-schedule.xlsx'
          },
          {
            name: 'My current grades',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zshgrde.get_term'
          },
          {
            name: 'Change of exam',
            link: 'http://www.harding.edu/assets/www/provost/PDF/change_of_exam.pdf'
          },
          {
            name: 'Bible class requirements',
            link: 'http://www.harding.edu/registrar/PDF/bible_class_rules.pdf'
          },
          {
            name: 'Password change',
            link: 'https://password.harding.edu/',
            terms: [
              'DormNet'
            ]
          },
          {
            name: 'Teleinfo',
            link: 'http://misnet.harding.edu/teleinfo',
            terms: [
              'DormNet'
            ]
          },
          {
            name: 'Testing lab',
            link: 'https://misnet.harding.edu/testinglab/index.php'
          },
          {
            name: 'Testing lab policies',
            link: 'https://pipeline.harding.edu/assets/ist/testing_lab_policies.pdf',
            type: 'pdf'
          }
        ]
      }
    },
    computed: {
      topResults: function () {
        return this.results.slice(0, 10)
      }
    },
    methods: {
      search: function () {
        this.results = this.fuse.search(this.value)
      }
    },
    created: function () {
      this.fuse = new Fuse(this.links, this.options)
    }
  }
</script>

<style lang="scss" scoped>
    .search-form {
        margin: 0 10%;
        input {
            color: #000;
            width: 100%;
            box-sizing: border-box;
            border: none;
            border-radius: 10px;
            padding: 7.5px;
        }
    }

    .results {
        margin-left: 5%;
        position: absolute;
        width: 70%;
    }
</style>
