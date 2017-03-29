(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', '../../../../../../../../下载/echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('江西', {
        "type": "FeatureCollection",
        "features": [{
            "id": "360100",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@EHIJ]AGKUJSBGCIBEBICS@W@MEOKE_KOMOUM]CKBIG@ECGGAEEI@CDE@EECAAIDMCGCCEmGeCI@OFUDSEOIEECK@GNMBEBOACKM@GJ_DEDELA`BJCJABCDEHGD@PBLEDEHKRKHKF[AIIQlZ\\HJA@QDCFCDBDDHBDDEJP@FA@MDGHGFKFC\\GN@LEH@PGPMRQBKAIGK@CBABEIOBEBAH@DC@ODGMU@E@GLMLGDELOBMDMRchuPOPI\\[TONSXSFGBEGY@EPYBK@QCKBACABAD@DAB@D@AADEACBAAAGCBCDAAO@AE@AA@ADEECDGEAACHCEEC@GAaU[[QYEMGKEI@IFa@IEQKSMESMCMIeGYCEGEGC]DyAGAUEK@ICUIGI@WKSMIC@EBCNBJCPGLWJMLEDOBICECCCAKBWEGE@WLkM_O[QQMEK@_EI@OACAAEBCJKFIREFIDWAUBKFQLGHAFDN@LGRIL[LWBYLCB@DELEDKBEDCDAD@VCHEHWJOXCFE@K@kJEAOMKEGCIAMBA@CIC@MDENCDOFC@EAAMIKOCQDMBAB@BHJBDF@DFBDEH@FIBGFGBKFGCA@@FEB@HABEBG@AAIK@ABADAAAEEEBCBCFAPCDEAAKOMOWKIC@CNKTKLKHAB@LHZ@VAJKVAF@HGTELKJKLaTKBMEG@EA@KDOAIUGUUCGCAK@YPA@EAi_GCED@HGFAFABI@MJC@CCEAKFE@EEECEFF@@DGB@HCDE@CBC@@EBCCECACBAA@GDK@ABABBFLDDBBFBDEL@FAEGH@BE@CCAAEK@CCACA@CEFC@AG@CDA@EGEDDF@FABM@IC@CCEIGEA[FIAAD@DEDE@AFA@RFDPLTXNHJBHAFEFELEDGD[@IBCDEHAF@HFH@DCDGAAA]BACECGIAEACBCAEIAMAIBGDCAMSCCI@CBSJAAC@ECEFBLJPFBRBDBFN@NCRELMHABBDLJFH@DCDBHCFBBCPCD@LLHDDBD\\N@DOLALDJBBLCFDDABDI^BXETGN@F@DFDbDFDDH@BIF@L@BSLAAEEECE@CDIEBCEAuDBB@DABBFOPDCDB@LF@EDBHC@@BJ@@DDDF@BCFBBFFBBDJHKLB@@DBBCBF@FBCFIHAHHLBZFXBFJPBN@HIJALCB@DFNJHFPFBABOHGBMAI@OLEBGAEIECEAMBUFK@KKKFCCCKEAEAGFCFAJMAMFDF@DM`EJL@BDAFGDAD@DFFHCFBBBD@D@GKBCD@HLDDFPDDABIBBDN@BDCHFD\\DBB@BBDBHELBFDF@DJHCNHPDNFCRSDBFHPFDTPPFHAFGLALEJADDH@JGFMDBFADIREFAFFJAFKJALMLAJCFMPCJAFMDAJMVADHH@DBFHC@FH@ELBJBDHBHFbJRFJ@PAHCd[VWNQVSLCX@TG^@HAFCFEBAC@BM@@DA@APCBBF@NIDCBBBFDBHBBAHAFFLADGHBHD@FDHBBD@BEAGDAAGGCGBEAIE@AC@AGFGPAFIB@JBXALEPBVIJBDFBTFBLAFCDSRMJKDSFEHAFBFHHDHBJCPDTAJHJHNFBB@FAHAPDJLFDFBL@HKhBHFBREL@hDRXNVRbJXNNXHFDLZ@HNVAHCDABCJ@JLDBDCBBDJLFBBHLCBABC@@FBJFN@LFRFL@JBF@AKFGDAF@HNHFBJJFDJDAAABCJ@CC@MPIFKDDJBBFBBLBLLAF@FJB@CAE@ANFTPLFVCVCJDBJhCjJIog@CCC@AGECKTQXcDGTQPGRE\\CX@RAFCNQ@MDIEM@CDYDAJDJLFDHBJCNFFAFDDHFX@NCPCZIZGPER@NDRJRJHLFLDJ@xc²tF"],
                "encodeOffsets": [[119195, 29751]]
            },
            "properties": {"cp": [115.892151, 28.676493], "name": "南昌市", "childNum": 1}
        }, {
            "id": "360200",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@V@bKHERENMLYF_KiCEIU@IBEFGJEFCTBNKRCL@DLBJDFFFFBP@TDJDJJFBF@DCHQDKDODEPQFALBXHFPF`DDLFJ@PFNBR@FADEDWCEIWScBMHOluDAH@DAPIJID]@SE_CIAQBGBGNGRUFEDCNELGNCH@HBNFP@FAFCRMBC@EACIG@KCEBGAABC@CBADEGEHC@EAADGEGJ@DCDE@CF@DA@GFIB@FLP@HG`BZMF@HB`Lh^\\PLBRAJCHGDE@IDETCDCBKBgPWLGVEWQIIOISGQBCHCDEBC@CIIECE@QICAGIEGCGFCFEDC@C@IWCOOaQKILITCBMCCCI]PMMIKBSCCCOKKSKOI@IHCF@HFF@DE@YSCE@MJUHGKK[EQGECBUAOIQ@QDCPK@G@EKGSGKCGGIE]MUOEG@KDEFIZSFKBEACGK_WaQYGMGMKIMFWEOAGCCGIGMCE@@HCDEJCBCDYHORYTKfKN@FDFHBJ@HAFBFDDHBPBREZHVDPCDABGAKBGAICEOIGAAAJKAGDMLORMFAJJDADC@ICEKEAIACIEFGAGBEFEJ@HGJMGGWKCCKGCCHGGCCE@AJGCA@EM@@EGAEEHKAE@ABADBD@JGCQLECGAAEDGIGBECCE@CAAKBKACAKACCBA^UFBNHLCLMCIFOJABGACPELGBECEDCDAAEBEFAZ@FGBGDGHCNAFBFADCBKQsIm@EBABCAEAQDCAKLCBICGEAC@EHIDOCCAGBEEE@HH@DED@DGLCD@BG@GHa@OHGH]HW@MAIEEGIEgKE@IHO@EGDICC@EFGDADBBAJIIKDCAI@EDABCCEIBQCGSCAIDEAAGCCCAMBIBGHKDQ@AEAAEBCDE@EGCIKEYCM[ECOGKAECIK@ECIE@KHMMQAGDEJDTMVABECEACBAHC@YGGCAEE@EBAHKDC@BECGKBCDCJCBMF@FJBCDG@ABHVCFIDONEBCAEGAEC@CDBD@FKD@BBD@BE@GEAB@BNHBJCJE@BEG@GG@CB@BAA@GCGMEC@B@FEBDDB@BD@BCBDJGHGDIEGDMAABCHMEA@GJ@LABOAKHGEKD@AHE@AGAEFECAEAACB@ECAE@AHDD@BE@AFGLGTKTYVMPKF[LMHKLSNEHEfJpLZJLFFHB^@NJFHHbBnFFZBJDDDDF@LAFGLAFFNVTFH@HEnCL@FDJFPF@JAHDDFCFDBHBLEJD@DEFIJNFFPMDCDCF@LKJIPCDYNUHEFABHRALENIHCLIVALIV@BLHCRALBDJH@FEFKREP@F@NHDF@HGDCHBDNBDPHJTDD\\AFFNBV@BBDFSnEHMF]VEF@FAJBHPJBHDPBF^PDFBFEHCVH^AHGDEBUBGFEHEZ@dHVFFBXEfHV@JCNEJAZEPC\\KXOTARbXRXRNVHHHFJF`VlBHAPPH\\RNPDJBHCHGLQL@HBHXTJDNJFFBFALEPGNKHmNOFEJULEFEL@DBDHDP@JBTPFHDHLHbNFDDFBPIX@TBFJJRHLHVHNBJHLDNAJ@^L"],
                "encodeOffsets": [[120020, 30646]]
            },
            "properties": {"cp": [117.214664, 29.29256], "name": "景德镇市", "childNum": 1}
        }, {
            "id": "360300",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@EDILILEN@HBBFAHDBXAFAJMDIHIBAESCGMAMKEKIAEE@CFAAGCACBGDQGGGAKEAIKGAED@FFLCFCBKEukAMEGWODCH@XEDCBCACGEHO@KCCC@IFGBAA@AFOFEX@HGH@DFHDFADAHaGMBCDCFAD@DDDJL@PJNIDC@EAIGGCIAIBIJGPCBCCQDGFAPDRGFKFANDBDLDFJH@PMJBJCDEBEFIHA`FNC\\JVPD@TGTH@DGFADHNDBH@FEJBBA@GDEPDDAPUL@FC@EDI@CKGAC@AH@JHDBTCJEBEEI@CJGTUHQEIBCDCLGDE@GBCTKHMAKCGOSAAMAEE@ADAVCDGFC@IJCLMDCJIDEHGFADEFEPEFITCDMPKAEMAEEEGCAGCEBQG]MEGAOCMGKGEI@IBECG]@EDEFEBA@IGMGGAMAEGESQEWSSWAQOGASBSCKJKDaEMCGEKBOJICE@EAQFKAEBIAMM@IGU@GAAEAACFOGE@ADGPOHDH@TKA@DC@ACA@EBADCBAAA@ADCHCJAFCF@JED@GI@QDCBCN@DEZAFCF@JSLMJEH@`NLDFC@EKU@EBGJQFUBWRW@UOMwcGFIFGCWSEEAE@AHK@EMKImECIGEOEAC@YHQBWQOOMQSUAIGKAOACCMACGCEGAIAKDGFADCGKBEAEGIKCCGECEOEECAQ@AAKWAGBOHMACAAGCQBCGMGEKGEEEAIMYAAEAODeFCHCJGJIJGFGHA\\AJEPED_ACD@JAJCHID]BEDGRGrAVCRCPIBGEKMIEI@GBIHEJ@LDL@ZBHBD@DBHFJ||LPPfJPhlLZHrFTHNLJDHBJAHEFUDEH@FJXN^L`DjD^CDCB[MkMOIECG@WHMAQCMAIESAIBKA[KKKECKBEDG@IAIMQKSGiAMD]\\YFK@[MQDEHCJOXCXBRPNRLLDH@FJQFFF@HEDMBSAIFAHEJDlGPEJCHRFFHBBPBFBAJ@DHHFLNHADGHFNFD@DAJE@AB@LABCAGMEGEAODIFUFGFGNAL@PNXNRTjHdATDXJPPRdT^XPRTnJJd^JJHXCTFHPNlpjbXPHRBRC`MnEJIFQFGFGAEBGPDHBPHT@JHNJJFPNZPJTZLDV@PB@DCJHPLHRFNJF@FABMBAFCH@LBL@JBBDBD@VBDJNBDBFJHJADCNUD@J@DCNCJ@`HBDH@DABA@KBCTBNJJ@NAAI"],
                "encodeOffsets": [[116686, 28654]]
            },
            "properties": {"cp": [113.852186, 27.622946], "name": "萍乡市", "childNum": 1}
        }, {
            "id": "360400",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@A@@AAAA@@LEFALJB@G@@BA@CBCBG", "@@FBN@BG@EEEIFBCE@CAADDBABBH", "@@BBCBCIIEAIGEGME@CBEHBLE@IAK@QEKEM@IEEA@@ADABKDAGEAIKACDAACKC@IDIBADCBGMU@GKYECWGMMIWQaMUQWgCK@QFEAAGLg@GAKCEKECIBOBG@EAAMEIGIGSBOCIDGAGCEGEAGBEFCRGLSPCP@DCBMDEAASCEEAEBSHOAKFWBIAA@EJOBEHBHD@@BDDLDHAHDBHCBBHAFC@AAEOICEBAFKBEEGBABGACAAEAACDMJE@AAOD@BCB@@AND@ABEFEDGB]@SHW@KDUTMRUXc\\GDOBI@QEaIGEGACLEBBTAFK@OHK@ADCBAFE@EJEBDLHDHJ@HABAD_JCBIAICMACBCFCBK@GACJBJQDEDK@SH]DcTUDSBU@QGEBEFGBKES@GCcIYBWFO@[OUEO@ICKAIEcC_QIGCAE@EAQOCA[AmWEIE@CAE@GDECMCACBA@AEQEGECSCICG@MFIEW@GCECKOMEAE@CHEBCGGMEQMAC@CJOCE@GFE@GBCGEAICAI@CGOOFEDKIIAEFUFGHA@ICG@CEGGCIAECEAKCGAIBIEAGCAMMAEDOCKAUCEBABENKHQAGEE__EM@GAAEAG@E@IHC@AGG@GC@GFCBGCKIFEAG@GE@IIAEAIAACCAGJCBCHGFANEDCFKJE@CAMSECKCACLQFQAKEEECKAEA_UE@KDCAKOQIKA@ICECABCACE@QBOFGAIGGAeJYBIAIEKBUCEDAFCBO@GFM@IJCHAJADOH[RSRCPBPE^CFKJEDCAAKCAEBMDK@IMICC@KDKCMGGDGBSGI@GDE@ICYeACOEEEDK@IL]@CCEID]NKDQNMDCAEAEIECGAgCCBQLQFCACUAAaDGDEHAHSHCHCBKBOJAF@HCFQPIHMPCBO@ONEHCbENGLCLCFIDK@CCEIQCCBABGHCJ@DBNADMPI@@GCCKEM[GEUIcWCCAEDKAAOCCEEDIBMHCDDJDLPLFJF`EJDPAJCDOQIAG@CFGNBJIDeKWIGBS@GBKLCNKAC@AH@HDFEJCJALHNNJ@FCRCHEFSJO@OOKQCFANCNINIFQBAPBDH`@XC@ABQIM@GCKIKMQLU@JLZ@FIHIPGFADAHBNBJANBDCHEFA@BHJH@DHNAVBZBJFLNHJBLAFFFJPbVHVRJFPD\\PFFDFDZDDRHFDJPDPARDDXDfJNAZDXArDbHH@NEH@ZTT@LD`THBF@PGFAJBLDBFBHARGLETHDFB@ZJLFD@DCJOJADBH@FVR@FC\\CLBFNLPFZH@HGJAHEN]V_HCPCXBJEF@FB^VRFrDLAPHF@BLHDJIBAKCCCPIJBAIFIDANANFVB\\@DAFEdDzXRNRFDlhPLZPBJDJ@VGH@TDPFR@\\EFCJKBGA_HC`CBDFNJNLJTFdGL@HBZTFBHFPNADCDE@CAEBENDBDTDBFDBFJFD@BABDD@FBBFBDD@DDBNCHEH@@DHJ@DBTGHBDCJBBFALNHFBDBLFADDGB@DCDAA@A@AK@BBD@BDCDABAFDFDFAFCFG@QCICIGCCMGCEBCFKPCFCBGGGKEI@[UCAE@ADO~EFCBIACACFEDBBVNHPDBPFJTDTFJDPBDFBFAJQGEEGBEEG@@JDFATDDD@HDJBDF@BCBEG]@ADEB@DBJ@DGJCHDFBVHJJBLJJBFADCBcFCLBXLHFNVAF@FBDDBJHHB@HCTBDDDD@H@BF@DGDCPADIHIJ@FEFADEFCJHJCDHF@BAN@HFPB@BBBDBJCH@DBDDFBRKFG@CEIDE@EKAAKII@EFEFADBNBfOJGF@D@FBFAP@VBHH@JIT@lJ^AHEH@FHDAHBFLFBBFAFDD@@FCFADMDYGO@OI[L@B@BVHEF@DFJHFBDGF@FBFALFJHBFFBL@FAFMF]@MHIJCJAJDLFHLFL@TMHIDIJIFERE\\@JCFCH@RFZAZB^GlLNBRAFABG@QGOBKFIHGFAJ@FCBCDBFJJDD@BFFDBDFB@FLCH@DBHBJNHDTFJADBBBDBDCHBJGHJAF`\\NFLHJ@HLRJHHNVdbvbNNDFC\\GTBHFRHN@TDXFHJJHDdJFCCHJ`dCl@zDBxJRDhD`CpUlawÚÔqpEV@nHlR¾zzrTPh\\zXR\\@lARGTMbmNQFEPAhN\\PdZVVj`bPZvXpXtbLBNB@RBNFLHJHN^LtLATD`L`RbT\\PNNHTDnHR@^@PCXGz]LCLARBZFLOHAJBD@HIDQLILBDAHUT_DKBCJBhRJ@BC@EEIDO@ICE@CACDAAIBE@IJKB@DDCHBNTATJFFLFJBl]JKJUAQM[@OSuGKWWKOOQQMIIQKS[Q_EGSISOQEEBMLQFG@KIMMKaKIKAOIAEKIOWEC_MKWIQIUEEUEGE@EBGDCT@NDHEFEBKAGEE[UQSEGAGBGFE`QTOLKFOMIEA_NKBCAEAEIS_EC]K_GIAKBSDIFMLELILGDaDcLQ@OGKMKOEQ@MDEPONGRCLGBEHUAQAOEMKOEK@EDKFERODEFI@GEGWQGKCQ@KBEFGJGF@FABGNG@CECBC@EBEJCCE@CFCFCA@BEDA@AHA@AD@HQEECAEECBCABCHADC@IAIA@C@EHCBACEC@CAADCACAAEABACEFADAAEFCBELSLGFAAEBABB@ED@DA@GCK@CDABBAGPOFA@ANGBC@EBACCJDBABEAIDE@IBCH@AEB@CEBCD@BDD@XGbOhWċÕ×@kLQQSGDC@IEAABMAGQSIMMKIQIKKEwG±wdM@SIIGGOEO@IFYHOJYDYDO@MCOCMGEEBMEIBE@GCIKICA@ABCZ@DFNCJ@NMREDQBW@[DQFOHSRCHWdSRDLHF@BDD@DphJiIgDAIICUDUDKESOME@BBF@DIA@EBEKKKAAAAEIACCELOJ@NDDI@@B"]],
                "encodeOffsets": [[[119507, 30410], [119508, 30410], [118789, 29809]]]
            },
            "properties": {"cp": [115.992811, 29.712034], "name": "九江市", "childNum": 3}
        }, {
            "id": "360500",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@TCTCLEJEBABECICMFAJCHIUCGIKA@CHCFG@ECK@GAMCEIEOGG@CABKDCBAECEKXU@EIEKCWMCG@AFEDBBIAMDGHADCDQHI@KFKACBIDCHBFAFEFBHC@CEDCCEBCAACDKHABBEFBDBBF@BCR@RGJEHGF@FDDGD@RJH@HAHIDAJCHBJHBDCH@FFFJ@FCTYJED@LHF@DABADIDEHBfXNBJAPOJCNFFFHBFADADOBAF@FBHFHBPAHEB@FJDBDBD@NEFAFBJJDBJATGCCGAE@GBAABCEECKA@EFADABCCWBKCCE@EDECMEEACGG@ECEg_MGEIESSSMGKMMISIWCKAWEU@QEMGYCOCGBCAQQQGEEEAQAAAKO@CDEACIGG@WGEBARHNAFCJMPEBEAIE@O@CCAG@CCAOCE_SKCG@ADCXGDOFKPGFEAAC@MAACAI@aQKAAEBGFG@ECCMGEEDUCSBCFABC@OAAAAQEWJIHKRIFCFCBCAIGIKKGBABALADABGAEMEKKGCIBI@OGACE@EAGGBIICEEIIICS@UGACBGACGCCICEOCKDA@GCEGKAICABFB@DCBG@GFG@OAMRCJ@H@BODEJGDCBECG@CBANCFGDE@EAEMGCCIAAIAACGGC@IDQGCGAIGIEAEJAJCBOAICM@SEO@]GICEEAKCE@OMIAIGIGW]WG@SJAFEH@PCDGAOBGEEBKJBLGHKCGDO@eEG@CCCACDGAML@BBJ@JAHBLGFADBJADFJLJ@DCHAHEDIPHRDJLHFF@LCJBHDFBJJHDLHNFNDDJFJBDDNT@BCF@DFFFDDD@LAJGHAFJXEREFCD@DFJABC@OE@CDE@CICC@CDCLHFJJ@D@DEDDLJHVNDHAZCXOVIFKAKKKG@CBCAEAC@CEIC@KJWJCBOAIBORQhKVIf@TBJDRBHDJFDZHDADCD@DBBFLB@ACGDADBDNABI@CJF@@BIFCDALBFDDHHHDR@ZDHCNFFANIDBFB@HFAH@PLLFBDBFNF@HBDDDPFBDEDECKACD@DBDDBBDQREVBHGFEBHH@DAFGRALCDKBIJCFNLLDNRJABD@DI@ADDDLDD@FCL@TCFBRJDFHBFDFJDBHDT@HBTNHADAJDD@HIDAHFFAPMD@FDVFDHD@REB@FDHHFDHADCD@BDD@RIB@FFJBHED@HBHHDABGAEKGCI@ADCFCFCFBDIEECUCGIAEEBGAMBEDAPBDMHG@CFCDAfHDHJFHN`EJDNEDBNFHCPFLCAEFI@OBQFDDDFBJ@JBHHDFFEBIFCBD@JBDADBFGHLPFLBDHBRBdLFTLPHNBBN@RFFAFIJIBMHEN@TBBD@FDBRBHAHEFGFATFHJLQACBCJAJHTJNBLD@DDDJ@FAJBLEHBBGLJH@"],
                "encodeOffsets": [[117890, 28756]]
            },
            "properties": {"cp": [114.930835, 27.810834], "name": "新余市", "childNum": 1}
        }, {
            "id": "360600",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@H@NCLGHEDGBMHYHKRWXkXQBI@ECO@IAO@IFSD]DI@GDQJQBG@KCQMUKMCIAGAOPOTKBEACIOEO@ICUICGA]MGEQSAEBOGIOAQDEAACPeAGCGJACEFAHBNAHBDCHA@AEC@AJCBEDECCBGDE@CJCHKAIGCAAAEBGGCGAEAIMIIEIBKHSJMAQCIQOAE@EFQPGVAbE\\QRGH@TFP@TA`OLG`IvGNCHEHMHQZcBGFE@[H[BIA_AGWeGSEmKOGMCECGBGDEVCBAGOGCEACACCAGAC]YEGCCKCQ@MIGCMDWKOWIKAKGCMAC@CHGDA@@HDFAFDNAJAJCDIHCBG@GAGKII@KKIGCM@IEEBADCBCA@CDCCGE]GFCNCBIDCHAFKDECCBCBOXGDMPMFOBKAMGAS_HOLGLOJOEMIO@WPELKFOCMSCO@MEGSVGDMA__GMKMY[SBQLGJENILEPATDPFL`nZRFRAdAJUTSLIJgRQXEDEHKFGZGJ@HBB@DBD@FI@AD@BE@ABQECFCBCGDAAAGBICG@@BHHDFBHAF@FA@@FHHGDCCEBCFCVBBAHBDCHMHIBACGQGUGGM@OBEB_^GAUFEFIFSRGDO@G@GCUGEAGDEFAFHFAFKHINBbFPPTBHBNAFEFWHU@KESAICEAYNSBMDEH@DBLHN@DCDQCEDYBOJIJ@J@VFJHJPPhVZH`CTKFA\\@ZGH@J@FBDF@FHPBJDFFPBL@HIRWZIbOXN\\FFvjNBJAfBF@JBJDH@HFHH@JALMNGNBJFTZ\\T\\FLCJGPQZELAZDDbIPDFPBNFFFDh@`FVAJDDJHDD@F@RUFMDGAA@CH@DABCAABCBBF@DMDCDH@BHBDF@FDD@BCBADJDFHJFTHBJPPPTHTBNObATFLNJJFRFNAHAHEDEDERQPIVKXCNEPIFEHGLD^T^N`RVHF@HDJJBF@HBDDBBJ@JEHBDNDLAAAECACB@NFRQ"],
                "encodeOffsets": [[120067, 29302]]
            },
            "properties": {"cp": [117.033838, 28.238638], "name": "鹰潭市", "childNum": 1}
        }, {
            "id": "360700",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@AAQCCOGCCICMCKEEEACEDGAMJAFEJOBM@CIGIM@EDGCG@OEOAMOK@SMIEGEE@EBEJILIHIH@FHFBHEFEDQHEF@XJHAVIDAFQ@INEBG@CEKBEBAHBFDHEF@PHDADSHEVBR@TJNCLBFCJQKQK@UMKKM@KMHGdUNOL]AGISGECBECACE@OMIMDCPIF@LGLAFGJADABKTKNOJEHGLIB@TNP@`JH@TEHDH@JGLBHDJLDDDF@DCLKN@DLNRLLFPBJEFBBFJBJJNAFBDDJJBDHTBVFDHD@HADR@HCPK@CACFGHEFAFELCLIFABCFU@EBEFCPBHDJHVJJBDIRI\\MPMNEDE@IAIRC@GFCBCJBBADC@EEIMIDENCFAGM@AJADBNMTDVANB@CCKBIACECEEAG@IAICEECMCEEEEGKAGBICAACBKAGNWCSMMAIEAMAMIEBCB@DEBK@]KCBJZ@NGP@HCFECIAUH@JAF]DGCEM@KAIGGKBEAAI@OEKHCDEACGCK@OICEM@OEKGEQEIIECC@@EAIGC[AAOKAA]CTM@ICKCCaGECCEBIGGCI@AFEBE@E@CUMDMHMDMEMC@GCJEH@BB@BE@DDBBFA@@AEHE@AIAA@@CDCFBBACCBEF@@AECAKAEBEGECE@CJGVCDEBCD@F@HPDBHGGEACBCDDHARBXLDAFBBBA@@DFBD@DDD@DHP@JEA@BAACFGFA@CBECI@EHICG@IJGBCDGBMAOEEKK]QCEKAIKSOOESMEACCAQCESIKCCADOEK_CAAKYKKBIEAI@CCCE@GAC@EJQFODWIEaBKAKGS@CCAGGSGEGAIGEGCMCAMEG@E@KGY@EAGEEOCAEAMDKAKCEBINCBC@UEIGSCOBYMGM@EGMMBQCQIAAAEACWMBICE@YBEBC@QDCHFFE@EDCNAVMDGCODAHADCDEBEHADCDIFC@CEKCIAaKEGD@LAJFJADA@G@IAIEG@CEIDAAEAO@CGAEIIGKAEDKCCEAIM@QBM@GCAOGE@MBGGC@C@KLGAEHCAAEBSEAAJABEA@KGMRK@A@AG@AGDG@CIG@CJIBGLGASACC@EHCBEAEECKACO@CADMHEMS@EFCHAJEDI@]HIAILK@CCIGGAGCAKAODCAAACKASBO@CACDGKGUCGAESEGIGBEDACSBEHENHBAEIEKAOJQ@GJIBCCK@GBC@GCCIGS@CCAA@GJWBEY[EI@GPYCMKCAG@@RCDEFG@KACGC@CJAFC@CGOCMKMIGGGA@CJGFE@CAAA@MECCAI@KJIDE@CAEKBKFOAMII@EIGEOGICKCAKCGCAAOFQCUYGCABOECBCHGDEBGMOKD]AEBW@CICDGHEDC@COCAABGBGBCLBFGHAPFD@DCBKDCFADMBICGIEKBCC@MBCDEPKEGAOBEFAX@LANEJGFIFEGEBGEC@EP@@GBCLIBCCEG@EICCKHOCEGCBCAACAEIAAICEQDIEACBG@MBEBEJEAGDCbEfcNSBGAAEAG@YLIEE@CBEPIDCHCBSGAACG@QDGHEH@HCDILQEGC@CHG@CCAEHQBS@SDIFGLGLAHCFEBEACMKMGMC]@OIC@CB@BJVEJ@BHH@HCBOBGFCJIDADYHMDIEGMGCEI@OEGAID[AEEAM@IJK@EAAEDCFCJAKGAEBCLOBCIEMDCIBQACEEEEBS@AEIKIAABCFCR[@CACUOAE@G@AMKAC@QBEZODCBECSCGBAHAD@JKLBHCHBNHLEBC@EIEHOKCGEDIACS@CBMBCAIGICK@AA@ARIT@FCBOHGDIEU@EFCHBFAFEBGJEFGNMBCDGHB@CFGVOLKAMBCDCFAFEAGIECBE@MCMAG@IHG@KCYJQASIQKMKMGQEO@ECO@ECG@GHKBM@GDKAG@ED@FCBIR@JDDNH@NALADGFKXGJ[FGHGFK@MEEBEDCJMDE@IFKDEAIMMGO@O@IDEFAF@HCLMPCJAJBHBNIVBXCBMFIFODCB@FQJADJTAFEDQCE@GBADAPMHEHHH@FIBKLMDGXCBWJMCOBMLEBCDudKBKEWaGCGAGBEFC@Sc@SBOAECCC@EBa\\MBMCG@EBQPEBMAK@ECYAICGECOKSEEODGBGCIEEECAADGDIAOKGAYKQCM@@A@GHSJADGG@GDeBCCMCAAEAOBAAIKECIBCCG@CDAADIGA@C@C@AB@HF@A@AIKEACBAFCDGBC@CEEAALGBI@@DDH@BECAAA@@DIPBHIJ@HCAG@AACAAD@JI@QCCBEFAFA@AC@KMGACBCDEACEGYMEGAECCGBADEBQACBCJABA@UKKBMAMGSGGMEEIEICKAEDAF@HBNcDKEGECK@KBKKK@CFGCEGEAGAEHWEIISAUAAKAEW]MGDEFETILLZADSJE@OEKEEGAECASJYXE@CEE@ED@DADMJE@C@AICAI@GAEBQPIDAAIEK@I@E@CCACFQCIAEFIFGCKAGJG@ICCE@CEAEEOIJG@AA@KIKEQGMELELGBO@CBO^EPEJCJBBBFGJEFUKSEMGCAGDIJEAaWQYGSEGI@_JEAKGYHGBQ\\GFC@CCEIGEUMOAEGAGE@IBKGKACAGMIWOCGGMGMACASSCCCAIPCFOBCFCDKIEBBLH\\EV]L@F@RCFJ^C@OAE@CDAF@HGHCBIBCJCBE@EAC@@DDL@@E@GCEEBEFCBEEEA@AJCFEBE@MMGAGHWIEAIBCDADATEJKN@FCHDF@JCHOD@NEHY@IFENUHI@UIIBIDOFKFAJGAYAGAGGI@GA@TDHF@DC@IF@HDFDABKH@J@DKHEJKJAHBHJDdDLCFADEDBL@jR\\BDAFBPANFR@JFDJ@RDNFFHFJDRANDJFLN\\HDFN\\CRGJEFBJBDRFBD@NERBHLLRDCJBJNVBBAFBBNLHHDNJDJBFBFJPHDHD`AJEJSR@DB@LHDDDR@DKL@BDFBHEH@FHFND\\BHBBD@DIJBHDDf@RFHDDDDFCX@HN@FFHBXJDABGD@L@PCLBHDBHBTDLFFPGH@HDHHFJDN@LAFBDJHBFJLJTJLNB`@LAHCDADGD@B@@BEH@DNLD@DOJDXG^@LDPJXVANBFDDZHJ@HCJAXJFAHDHJNDJFL@BDFREL@HEDHT@FABM@CBALCBK@CAYBA@@DADK@QLABBDHHBBC@@HABGBCDCLBBFBLAJALL@D@@I@BF@FEH@BJBDB@BAFFDHBHADBZVB@HCJIFAFBPL@DABOGABAPB@RBDB@BGFCFB\\AH@LAHOPEBOAAB@JDFCJ@JGFKBAB@DDH@DG@C@ICABAJCBEAIFCACICCK@KFSTODOEEBSCSNANADIFCD@FKTYDABJPABGBBNDHAJ[TI@AE@Q@CIAEF@HBPH@BDBDADKAKHSDOLIBGHIAGCWWC@E@CAMC@A@KFEBCAGYMEAM@IKGBKJGBADG@ADDHCBGDUCCC@CMKCSEMEQAAGAHG@ACEIGGCKAEBOACMKEOAGMCAC@AB@BDDKACNABI@S@SFQJY@EDMDA@QG@CHE@@G@AAAS@EBANEBI@AAAGDGGEBGGCADIDAHECAQAEJBHEDaFCAEOGAI@kPKAAEAAGHOBUAABBPCHSJG@SSGCE@CBGPQ@KGIIA@AJABK@ICE@@ADCICCGGBGBE@IIMEIEUUIIMFKCCEA@ENQEIGAGCCCK@CMSC@ODADBJDHAFCBMFEDADAHEFF@JFFFF`LJDBPAJ@LDDD@BKFKHQBILAF@FBFJFBF@DDDHAFCHBBBBF@FSX@BLBFBADADOBSHKBA@LJFBNBLH@BED@FCBO@IEIGEBADOA@LEJE@QHMBCDGLALLN^VDJCJKBEAEAQLU@UJKMMGG@GLBNCJ@DFHJDHHLRBHBBCBKB@B@FHLBFEBKGEB@@BDPLLX@DBJDHJFJCD@X@DDGPJZ@LHFBFCFUJCFB\\FX@FIHaHGDEFAHEFAHDP@HQL@NCJAJCFIBABE\\ENKTIBADAHJ`GP@HFLDJVRNPTJ^`EJ@HDL@JHJ@FJLDJAJDHCJ@JBFLFFNDFHFLRLBLPJBD@H^\\PEJAJCDBDDJEP@HHHHRDF@FABGB@DDDADG@CDAFDJ@DEHADDJD@JHNPHF`HP@JAF@HED@NLRAJ@RALLLHLHPEfRDBBNHHLFH@ZHJCNF^IVILATPPBHC^@LDNDPLDADENFJ@BD@FAJCD@DFJLDLHDFFHDD\\LNFDJRNVBDDNRJTNNLADBHGHAJBLBHGLEVDHACQHQAGBGFFZpBDXH@VAVENFFPCZJJFJTFFNJNDFLLJFFDNHB@HDLBJAFGFL@BFFDJDFAFGFCHBFDDFDNDBPBFBJHNFH@F@HGN@DAFKNADADM@EEM@IDALAJDZDHALWF@RPVEF@DAEIBIFCNCRBZYRGDA@@H@FEFDBBADNPDTXD\\KHBDCFCHABBAJBDDDBHFDJ@JILDTKRANBHAFDFFDFTADJJAJLH@VIBECKB@HDLCPPJFLPZCFHCFBBLFNGT@LAFC@EBETDdGTHFGPCZDFEJA@CFEF]AGBAFAFDFJD@FEACBCDCDKBABATBFAFAPSJAFEHAZDLJL@JHBLDBBNYJ@DBD@DEDENIBK@GJgFA@ABBFFBDF@HGF@BHPTRFBNBPdBRDDLDFHBFOPGJMHAFCTBLBFDDBHCHIFANKFCHIHGHIDSXQNPHDH@LCLEFAJDLPFFD@JIHAFHLFVXLFJ@LDHZVDJLLLRNRjfVFPJRBRF\\LTALBJANBHERCVGD@VJDDBFALCFA@EGCBGFBDFFVbHNFFXRJDBB@PHJN^BBNDLFDFFVD@BFFFTJCJCTBPVBNLXBDFLPLBNADEAC@CJADCBMBAJBDEFANF`@XLH@HEDBLHLJFDBBCHDBVPRHD@HENIBEBKPBNA@@CFNJNFFALGH@HHFLD@H@FFHHLDDC@CDADADCBUAIF_JIHEPENFHBJEbHHADBBFCF@DBDJ@L@BCFAHJHDDADAtALOJCFADEBADB@BD@LMF@BFAJDFPBFFDFAFBHVL@NDFHFVHAFKJGBEFFJHFR@DCDAF@JDDDBDEbAdEHARADE@CAEEECM@IFOFAFIDCAGBEFEJ@DDDNDH@FDELBLNHBDADCDMBADBHHH@DEPLPXV@RFFD@PCHEHMFCXIPCFCL[HErSDH@JDXJLTrFF`BFFDXJTBLDF@LBBDBP@HD^PFFDFJBPPV\\RPDJPHHDJ@BAHCHDFJFJJFHHBRDHDDPFHPNDFVFJHHHFHTLDJLJJP`LPCDMLAFDfJNAFCFAFFBL@JDBH@LB@XJ`HT@RRFBZGNBJ@REBC@CNEF@FHF@DCBG@KAIHQESPMRCFEBCGS@KAIJE@KFCFQHAHKDAFDJNHDHFFBJ@@AEEHEFICO@CDGBI@KCK@GCGEG@EKGEK@IAESIMIEUAKGSHOAQ@ON[BKDAVAAIKU@CHEBG"],
                "encodeOffsets": [[118956, 27515]]
            },
            "properties": {"cp": [114.940278, 25.85097], "name": "赣州市", "childNum": 1}
        }, {
            "id": "360800",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@CEEIAKGMMQEKEEKEUUGKGIEKEIQKM@C@CMUMIKKQMK@IIOKMCG[_ACDOES@]CGBKGGMECE@EBEPGJIFGBMJEHMBIPGBC@C@GDERIFGTSFANAFCH@HHB@FBFEJAXHNHLAJCJMNKGMAOCEKMOIOO@GJ]AQBKEGQ@AAKQ@OEAAGEM@EHIDI@MAEDKBEBMAGDIPGAMDE@IKEKAKEMDQCI@EAGEIBCEAE[QEA@CFOAODIBSJO@GFIBMBCNBFBBDHBF@DAFQHGBCCK@CJKFGDIBSFKDGJGFCNCDEBINCLEHIFSR@PFF@bNh@RHRBF@JC^CFCDCFWFKBOZMJCJI@MEIP@@CAGD]DQNK@CCGACDGAEBCHGREPBFBDCGOBCD@DIFCHCDBHFFBPBD@HINEJGDAHMEIEIGCGDABI@GCOGCIQOU[OOIACEEE]OGCO@CAAA@KCEAKISCWEE_AEESqIKCW@ICGqTGFK\\EDODWJEDGNGFODC@EE@QWUKOFO@CGGAGBCNADCBCACMGAKFKECG@MCCC@CFIFEHADBJCBEPEJEN@FDFFDBF@BCBQFGBcFaACCCICE@CBCDQ@GEEIFEHALIBEUGGECE@MUKAGBECEEEOACEBIAEE@KNC@@ACAABCFEBIDKPsBCBCBGCGIEBADK@I@AC@CDEAECAGBaGIFGAMEOFGFIJE`BJAVCDCBCB@DCDKCGGEEG@C@EKGGG@KHEBMEMIDE@@MBOAALAFMJGFC@QGUOCADGAAECKIKGCAGFG@WK_@MEEBCFIAABANCDIB@DBDCFMBKAKOCEWAMKUAAODSDISIEEAEC@EUCEKEMCAAM]GI@OAAICWQEEGMUaEEACHEDAFHB@DEBKAECCUIC@UHQDGFMAIBKASB[KQESCMGQEKEMOSOMQKQKKCIYUCG@KEIWKEUGKBEJG@IECOECKBIFEDK@KCGOGRMTWJCHGJGDGLEBMJEDGAGCCAEAKDSBENGHIPOAEEGKCCCAQOcMAEASQGO@AHE@GCEEAAEBAB@hEHIL@JAFMFC@CAC@CZIAMCAAGAEGEK@KIYCGBEFIBOTEBEBSAABABCLCDADBDEFC@EIECEBABBHE^EF@DIBEFYCODEHSGcHSCAF@FEDKBS@MHKEAADEEGYDKOIEOOKDGCA@DLAFUJG@IKIBCISBCEEEECGBMAQBSLKCIJI@ECAGCCACBIAAGBEDCDGA[LWCCSMOBCAAECEFG@@@CBQHYZQAMDEDAJFJCBE@UFQOE@KXGBYCICKBCB@JFN@FCNCBMBELCBM@GHE@G@MEIGEAOACACMCEECGAEDEHEBICECAEK@HEBEAICK@GGACMEEKIEKMCMIEEISIEYIODEEFMBU@UWGACYoEEAHBHGRDRGBUCKFGHKAIAGBGHCAKBMMISMQCCUAQMCIME[KCCEGCEKGKCEI@CDCBI@EACI@MECFCBOKMCKC]@GDOASOKBUJ]JMEIDYGG@KEGGAMCAeQOFKGKGKKQBI@QBMKC@GFE@IBO@_GGEMOIGC@BHBBDBFF@LCDBFEBMBABBDOPAF@N@DHFNLRNHRFFBBBDAJBFAJDJJFHHELFDL@D@HENFJ@TSLEF@HFPFNCDDBDJFDJHF@B@FCDUJCDFFjL`LNFJBLJRFVCN@LJTNNFHBTVXHBDCLEBOACBGFAJ\\X@BAHMFEDAD@LGLIA]GICI@EH@LEP_IYIGAM@KIOCOEGCWECAEE@E@GKCKOO@KFG@UKAB@LCJAFAB]GDLKLCAEGGGE@WHAEGCEDACCGGCMKKAECGIIGCAE@EAGEIBCHUP@FJDBBBF@LCFGFDLDFDBTFLFFDFH@FCVNJDDBF@FCLTRTFHDFHLFLBZNKLEVBLFHBHBDNLPJ@DEBAF@FCLBFDFNJDFOP@HCJDPADGDEHAF@HLBHLDFBHDBJ@PPLRHDH@JKBDJAFDFJ@DBJGJDH@FDJEJHL@P@DLLDNXX@FWBKGCBGEQDGAABAPHDDDJPDL@PBHDHAJFFPZANTXBD@HDH@DAB@D@BCBGAcDGACCIDAAE@QJeAEDMHYDEBCF@FFLCDE@EDIJMJCDWAOBACEAEHK@CDCAIECA]AG@UFQCQDEFERAD]NE^AHCBCBSGEHGPBLA^DN@PALEFCL@PCJDRELARDNELDLIREVKFADEFCPFHjfBNPZLNBFHHRBN@CLBHAHELFHAL@LBDLFFNDBBDCNDD@DAJDDNLPJPPBDKL@LP\\BJFFHFFLNHDHRAHDBBBDGNAPBHLXBBR@DBFFFPFDDHLDHJBFAFHLCDEBCHBRHLHDBDDNBDBPHLDLlr\\VRAZGD@FBFPJHFDJnNL@FGL@BBFFFXTHDJEHExdPN@VQXAXEVIRAH@FLV@FEDKC_MG@IFKNITE@EDYBCFM@ADCD@RHJC@IFE@EDIBGDCD@BBBABCDAB@FDB@BCDB@SLG@GCOPCJHF@BENBDFBBB@HHV@JDDLJHBHAJBREFBF@JDPILAHFNDbFLCLITDTAHBRPXBTTFXTRHFBFBNHHHN@JABEFCF@FH^FDJAJ@HFHLDNBPFHpVFALFFHFFNBBFTHNAJBHCN@PIPKTKDEZND@DGH@HMHIHEF@FBFTFDHAFADM`@FBVCHDDJHJPFNBNHD@HAFIL@DGFJF@DBDHJDJLTJJABBFDBF@HCJJJXRD@JCHGDAASBCHE@AAIBG@IAI@AJIDAHBDCDBDDH@fFP@HCLDHGAKLIFAHFPAFBFA@ABEAIFGBEVKFB^XHXHJBJNJ@PDFBLFFJD^HP@TFN@JDPBDABIFIFBHJBJDHRHJCD@HHBDH@DDDJHDFNDBH@HCDEBMDAH@FDDAHCFIPC@A@GDINQPBH@HEH@DA@CEABAJDLBFHHDB@LCPDDFDJHDBDAHBDVHT@JDJJFFJDAJHHFBF@BDPHJ@JAHDLLNFBFAHCBKBABABLHJLJHDBDADEJELQJGXIRFBBBB@PADEBADDTCVFFNHDD@FEHAHBFLBbRJ@DBBB@NBDDBB@HELOPEHCDWBCH@LD`TDFBPDDH@DB@D@PJFFBFANODIBEGMBGAEDED@XHH@HDBDBDCF@DLPBBRBFBFFRHRRDBHAPDZDNHRFV@XFLBXDTJNJLNNHTTFTFJNHh`DF@FHHBDFFDNCF@FDFLDXADDBABCFEB@DLFFADBBHAF@HBHF@HADGDM@EBMNGH@FJJRJNFBDDDBTDHADEHODED@THDNFRHD@JMJGDADBBDAFENBFDFTC@E@CJBEYCMHAJEFOTELBJHFP@D@DSHAD@DBBP@BHDDNDFF`GFCJAFCHAZBHEJK@@M]SEKK@CDMIMAG\\WRATYRKFANGJAL@NHDSNEHQPGHCROfMLDPEJDDFJFDAHGZCDCBE@IFENUFOBKBGHQDCPEJ@VIJ@HE@A@ECGFIBEDIBO"],
                "encodeOffsets": [[118513, 28396]]
            },
            "properties": {"cp": [114.986373, 27.111699], "name": "吉安市", "childNum": 1}
        }, {
            "id": "360900",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@D@BEDABCL@PGJBDE@IAG@CFADKACAIFKG@@EGDAE@CGGDILOBINCBEDINODEBINKBKLIBEEIBEFEJQBCAENCHE@ICGBCFIBKHKBEEGOOCSOEEGCAQTEDCMGODMIG@CCEAEFKAGAC@AAA[CECDGACM@ACJABACCEOCCGKC@ADHLC@C@AAEAGDEE@CBCHCBEACK@@CFEN_@CCENENBBIDEHEFBFBDLDDLELLL@VENAFBFDFJHBFAPKJ@NBHAPGBAEAEOIGEM@CDABKJI@GAMIOAEEWAYGKBGJGDEEAE@DAAA@CA@LKIGACEAAEEAADE@CC@CI@@AD@AGFCE@@KCACDPOAEBA@CAAvCFBADJFDCF@FDFFBBTK@A@KJE@ACGECaCEC@C@EHMFSAWJ]ACCBECKDAACIBKPK@C[MACCCKG@KDCDOAADEAGDC@CEGKIACBANGFKDQ@MEMCAQAEAIOAKFEFDD@BBTIDAJ@DDNTDBHCJANBJBBFADBDBFHJFDBD^ABBHBDC@CEG@GBEFGDCJA\\@HCFCFKFEBEAGGIWMKSCOQEB@BEF@FC@CBCJB\\EFBJHDF@DJDN@BA@ECEFCFHB@DCH@@BEDDFB@BDDDL@BFDB@DAFG@FHEBK@CFEAAACCEKAAAB@BCL@HBBDADBDFAD@FD@DAF@DC@GHA@CE@FEFDFFF@LEFBDDD@NIJ@BABEHE@GFCHDj`FBB@ZOL@DBDHVVVHBJCP@LFBH@NFPCPINGLKLIFKHS@GBELUBI@UGY@KBALGLKLSDMD@LJPXPNBLFBDCBODEDAFAFFBBCBAB@BJLBBH@FABA@GFA@EB@HDLEHAHEJA@EFGACCEE@ACGI@ABANARCPDJLBNFBD@PEDCFMNCD@DJB@NAJBHDLFPNFBlIL@F@JKJQXIFGDG@UBCDCFCLAFCFKBAEMIMCGMI@MCIIKUgFGAGECEMCABGHK@EJCDBJAFGBAHAHGRAFA@ANCJFJBFALEPCDCACKAAEGCCMDCGMAGBKBEB@LABEFCBSEGGAG@AANO@GBCKE@IGKECE@IDEAACEOACHQA[ACICOOCE@MEGGCKACCEO@MCCIA@AAWMACCAGICIGCKSCMEOKEMEEQG]KQF]IU@E@KIUFI@QKWEECM@MCESGK]UIAODK@ECASGO@I@IFIBKDEAOCGGG@AFGCIAIGMCIIM@CFEBIAECG@GKOAKEEECIDEH@FCDGKAACFC@QGC@GFQFQLUH[DGACGKIIEKAGCGbEJDH@F@BGFI@UJI@OFCDGRAHALEPMVEF@JAFCDYDGHCBIECEICOFKCeNQPGDOHGRMFCTMGK@IBMHEBQLSZQB[XBHJNCN@DLLTFN^@@ILGFYAGBEDIBED_HEEMCCCAGO@AA@CBCPEDA@CESIGEAOBIDEPIFGBDNFZIA@D@FUBCIHSACCACBIHING@MGQGCA@SFCPCHGCKASEGMEQIII@CBETQFAN@HEDEACCASHIBCAIIEAEBMFC@CACAEIA@GFOBGAGEEAE@ABCPCBEBGAEEMEIDOPIBMAeWGACFCJABCBE@KGC@IFSZEDI@EE@EDGACIGGAIDCBGJGBG@QIC@CHECE@GHIFQHQ@ADE@AAACFEAAE@ABCLBDDBFADDFC@DGDEAEFEBGACDAJBDEL@LGJCRCDGBCHBNAJCAEF@BDHXNLDJF@FWVFLFDABCDALDBH@PHJFDFBN@HDL@FEHGD@DLBHJVDGJIDEBDNDJAFKHKFSDSDK@KIAHGAKFIAEBI@CC@CKCMASIIGIBADBDKRGISEEBEHGFGBQACA@EACSAM@GFANIJEJEBQEM@AAGMKOEScKQAGAACEKKOHGAEBCAC@IACEDAJEFCEGGIAI@EACCECAR@PEJBFKDOEGDMECAMFIC_FGMIECGeGCBED@DGHCNOACBAFBNAHFFJBDHDVFFCJEAEDEDCD@BDJLHBFAHCBGGGAC@GFIAEEA@QJC@ACC@CDGBECGGECA@QFC@CGUEECC@ONEBGECBGJC@ICCBGBSMGAS@GCCAEIECGACEQIEASDK@EDC@KCCCBCJ@@CACIBMQKCMKDEJILADCBKHQBE@CGGFAHEAGFURQACCAAC@CDCLBFDFC@ACCMCCCAC@GMEAEACKEOKG@EB@GICMJEBMEGDYCQ@GCGGCCAEBKDCJE@AE@DIJ@BACMCACBDH@BKAAECAC@CDCBYGECEQCQAI@ID[FSLURgPQJAPBDAXILID@FJ@DBDBFAD@DLHLLLBJEPUHkAECGUMIGCKFC@C@CIIGE@ADIDCD@JD@DCF@DPFD@BAEI@CDCFEFQIWBEHGBI@KCCECEE@CDE@AMSCCIAIECCEMGMCKIGAICEAGDI@KEEKGCIGQJOFCBGDG@CKICCCBGHIDC@IGMIIIDI@GAEECAAIBSIIKICCGCAE@EICHK@EJGBGAIEMAOEGICIGCUDEA_@CNEBGBECESIAEBEFEHGNG@CHC@YMADUNOLQJK@GDIAIBWGOLCNSDEJOFEFCFEBGHCFIJCDKNID@JEDCHUDCB@BFFNBBBPTDHBLGNSLAD@HCFKHCDADFJGRSVIH@DFJAFIFSDCAIGG@@BBDLH@DCJ@FEDK@OVCBOCCF@HABIAEFG@CAGMBCHE@CSGSHC@UO[IMD_EGBEJAFCFIDIAONG@EIKCACMCEBELQHOCEBCHDRADODIHAJBJDJHHBJ@FCDMJOIK@CICCC@EBCDADHNGbCBEBGCCEG@GHW@EFEP@BBBHAJED@DD@LGPHFBDADCDWFG@CDXPFHBNHHtfHDDC@ECI@CDED@FBJLFBBLHHRHHCH@BHEB@DFFJBFLNLNBDHFTCDEHCJEJCDEBUBE@ACDC@EICM@KFKJCH@FBNCBOBQISAAD@JADKBBFDHDDJDJN@HJHRID@X@JBFDBDEHML@DBHLJLDNA\\CVDHCLAJAJELEBBBF@NDBDDHLTF@FDBIVABGHBBAD@@AFMBCDEAKJFADDFCD@CPEDCJGBAJAZBFCFEBEACDBXCF@JMDGLEL@FBDDBJ@NDHPBB^EJDRAPFJIFATB^HFHRBFBL@H@DDBBAJBLCJBH^TBHLLBJPHNLBD@DAJBBLDJAXJJ@PGDB@DDHAJDNHANBFD@FAHBD@BCDAFDLDBD@F@LFJ@HBHHHDDB@FHDDHJBHHNDHFBF@FOXBHHJBFDBHADDELMJCFBDPJBF@FEH@TADEDaBEDIGKNOBAHQ^CFMJCDIBGAMDK@ADDBDBP@JDDDDNNHHPLBRLDH@F@LALABMDKJGDEFGDA@OCIAKBKDGDIJIBOVGDEFCVADGBC@IAAAC@CFEBW@KDURGN@DDDLDBD@D@HLLDLDDLDH@HBHHFRNPERKFAJBHHFBJHHBFGH@BBHDF@JEHBFDFBFMLEF@D@LADFPFFF@FDL@BFDTJJBHBHAFCH@BJN@HJ^AJCJDFPDBBCLBFDDdXVJHFN\\LFDD@HJ@NOBCAM@CDIHGBADARDFJDDL@JCDEDKHKFMDaFGPMP@DANOJGRODE@GBEPILADADGTGBGFGHCbCBBDVDBRERKDAhDHBFDFJFBDBNCRMLC^MJCDF@DK^@JCLFFPFBDZfJDF@HCJ@THHAHCNHLDLCD@JDJNL@NCFADBBLDBFCLIDEF]AODOTQ\\QPGBCBIDGJIN@HEP@DABEFCVDLAJFJBZAfIHBJHHBPERAD@DDADDBDF@JLBRJLPDBLCF@`VFBLBFDFFBLERKRBDLDFDNTDBF@LIDEFCBMHEDGDAJIDFJBFBJB@JHFH@FBJEDLAHED@HHDH@BHD@JGF@H@HD@HFN``FFBHGRMLAFABDFBVDLCPBFNNDBBHJFJAHBLDFBFDJBLHBD@DDH@JGBEHER@DBFJJCLEFPPDHJ@DBBJHFAB@JEF@HDFIP@DBDRNNFHHADGF@DBFNFRTLDT@JFFCHAH@JDPDJDFHFR@BABBDNDFDHCF@DBF@FJnX\\BDBRPFBF@DBJH`RdDJFLBJDP@VF\\PP@XEZAdJHDT@LFHAFEFARHJ@X@VEREZM^CTGL@FCRCAIDIHBL@DADEDANBJDJBDA\\GFEBIGIGCCKFAHI"],
                "encodeOffsets": [[118216, 29733]]
            },
            "properties": {"cp": [114.391136, 27.8043], "name": "宜春市", "childNum": 1}
        }, {
            "id": "361000",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@PWJaXYJQ@GG[CEAIGO@ECEEAI@aH[@EBSLMDQ@OCYKWMOOGIEI@U@IJIPIZAFCRDDC@CGMAK@CFGFC\\AZMFBJDTBLFV@XGFEBEAMAGOSEOAaJMLGBEGEBEFEHCFBVHHDH@P@HCTQJEFEVEHB`]FAPAN@HHHVHRBDJANGDGACBGAADUDEFADDHCGG@EB@@EBEAGCEGG@AH@JDHABBCBDHDADERFBAF@@ABCJ@@EAC@CAA@GHIHYLEFGFCRWhQJITKVSBIBcEQYQ_mEKCOBSFOJKFMHIRKTAZ\\LNHN``NBHCTUFH@NDPNTPDLEFKXOP@NJPFPIHKPK`GBTNHLBPANENOHCPWDADAFDLCBEDGJCDADMJIHCHAP@PMDG@CESEi@CRaAKGGIMCAKBEAKHC@CI@EHUACKCIIEIAMAAG@IBEAECIOEAKDM@MAMEIBEAEGAI@GDGAO@GBE@@MBICM@EEQEeRIAOHK@KCEHIBADI@ECGIIA@IKGGS@@LITcCCGA@IBEDABAGEMEE@CB_^AHBF@DONKPKJODICK@EAGIOGKODSEIEMCAIFAEECCCFEFIPK@AGI@CBAJCDCBGFGIiEOBGHINGHAH@JENDF@HMDBHFJPNHFNJDDADCJMAIFIPEFGBOA_BKFCDGBIFADEEAIKAI@EDCJGEM@CDCAMDCNIJBDABcNQAEGUAICCEG_MAE@QMEBGFIBCEQDOEYBEHKJGB@HD^KV@DG@EIOAIRCJBN@HMDCHAH@DCEQCEDGEC@KEEGBGCCC@QKKDIACMGEKUMEIICCKCEWGGHGCQ]CICE_OSWCMQIEGCO@MFSFGBC@IFU@CCAKCYOYEOAWIeQQW_CMIQGEQZQDQB_C[KIK]SSCgNQBIBQEuKQEQKO_ODGFWHSAOBWESGQKMEKGIIQMUY__W]g}IKMEkkOGGEQWGgAaHYLUJMBMEMKQWUAGMIQGMMEYHcHKbcHIJEJQ`AFOGM@OEMEqKiMKG@CCCMIAUIIGGCOAEDAF@FEVADEBKJKDEFEBGFEHBD@DOLGDQ@BC@GGCECAUGSACIICCEAMBIIIAAEEAIFOASIQOCE@CLMDK@CCECCIKGCKAIHG@GCSFG@_IO@SMA@KJGHIFMPSLALCBIBEHKBKHE@OJCDJNFFJHF@BDFDDAHFJTBHK^MPcVGHLNN@LLVNL@LRIREDKAMDSIQ@UAGFCTCBOGE@GFECGAABAFFL@DAHMF@JERCBUJGBWIE@GFCREFGFEAEGG@GJKJIJAF@FFFFHNJ@TPLBNFP@PDHCH@FJNJH@DANIPEFIBBNCHDFFBFFDLDNDJHDDPRDBBDFAHGF@DLVBJUBCBALM\\@PBRGPHTBLFVNJTJBF@JFLLH@FFHDH@HDL@LAJCH@DDPEJGFFF@BI@EAGEGCIMECCBGLGBERED@LIFBJ@LHTADEFQDONFTGRBP@JCFGBEGE@MF@DADQFI@MAE@OHIAQQS@_GWIA@@KAGICK@EABEDEBEIMCeBEPKBEKMO_IIIKKCGSGEGGEIEUMCGOOECCCGAQGGIEGNCBIHMFGJC@OAEAGECAGDEDCJC@ADHPCDEAOAQFGHADBFCHBDDH@DMLCRC^BH@DO@FJ@NIJIDYNAPELEXCDED]DIDE@QAQGg@aME@OEQ@ETGJKFMDAJCFMDEDIHCHELATCJEHIL@DDLADGHERCBE@GAACEAIAC@CREJ@HIPATCJBPERFF\\PBFDFJAHFFBJ@RDNCLFLBLF@JCFBNOHCJBHANAFCLBF@NCJGJ@FFNBHFB@PLRBBR@FHALBRI^@HPPPJLNDFBPHNMLINIDKBMGWGIBEFEAA@GGG@EDMBEBSTEHQJCF@H@DADOHAJGNIFANEHIJOHAF@FDFNFHHALDH@^FTCPBD\\`DHLNJP@JNLLRJLVNDND@N@RLFJFLHJHLVVLFFFFLNRHNBLFJFF\\LLJDHHB\\CVGRKREHED@RHD@DEBBHLDC@EFGJCLJBLLN@JFJ@LGH@DJNDJHNBJDJEH@BHHDHBPCFALEJ@J@JHP@PDFPBRCHB^VHLFTNDN@FDXFRLJ@VELJF@V@^JRE^LRHFFFNPLNFTDDLJHJDBHDDNBBX@BJBDD@NFPDDLBHDFH@NDFPPJDBDB\\GRBDFPBDFBJCF@FDHL@JJFBBAB@HKLAD@BB@H@HBFHATEDAFKBA@AFALBHHNCDDNHDBFLBBDABEDKBKFEBIAIEMD@BEBQBGHGBABEHIBCAID@FGLAD@DDBFNHH@FEFVhLPBF@NNJDHJNDLDAZKXA\\KJKHQ@KCMBEHGRKLEVAXBJCFEJQLEDIFADF@PFJ@`FLRN\\R`PlNXKF@FHAXBLDDFDJDPAFCNKXIHKDOAIDMFAD@NJLT@XHJVJJDL@VFHBzB^CHDHFDFHZJfDNTNNFLTFR@JEb@JFJHLFNRZ\\\\bVHBD@FFGDBDFBCHFDCF@BBBF@@BBPCBADHDBBABBDCFBBC@A@CBC@ABDBABDL@RALMVAJHZLIVM\\[JUBOAEGK@CHGIEAKF@HCBEPKAASFEEBC@CGCIACAAA@GG@AEECBIBAAEBEFCHAFGFCDFNDDD`HH@L@dSPIHCZ@VHhFRCRHPNLTLJDFJARELOFMBSJI\\KDCJ[LQ"],
                "encodeOffsets": [[119592, 29022]]
            },
            "properties": {"cp": [116.358351, 27.98385], "name": "抚州市", "childNum": 1}
        }, {
            "id": "361100",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@BOAGUkE_EIGGUGQMQWaWBQPSLWD[FOBYFIDM@IGUFeAWEEGU@cFYFGHEVAFAHCBGG]DUFGAECE]OAECOAGOIAGBI@EFE^UNEFGTmCEAAU@MAEE[BCCISOGACCMAAE@CDGHI@CC@SFOHMJI@CIIACBKDQKG@CJSBKJUDKJGFMBKGQBAFEVGZMDCJOLI@KDEDCNCEOMEJIFG@AICKFA@ICDECEGCMDCCGWJ@GEGUSEMBEHKBE@KCECCICYAEEAmGaEGMI]@GAEEIKKYAOGW@G@IF[FGTMLKNG\\KLENOZULSHSHKBEF@@ACCBGF@DB@FDABBBFFDFEHB@BGF@BLCHFLGPBBA@KHIB@NFDGBANBHCJFHCHGCIDA@AACA@CCFA@E@AFDHNHDB@ABA@@DHHH@AFF@DIAIMG@ABAHFF@@AAC@ALC@EACDCD@BFFHDBFAPMJCDEGUBAH@DCIA@ENEDADIDCLADHAFD@LCBGFAF@BFHDZHD@BGDAFBFDBANUCSFIHCRBNNLGF@DJ@FJLFDLBPHFDN\\ZDLFDJFHF@DCFABBBFR@LCHGJANADBDDBHFBJCDBHTRDJADFADCB@FBJCDJLIJABCACBEH@FDDCJFHP@JGF@hLJFFHJFNBX@^GHGPGb@HGH@@ADCHK@CFC@CGGF@FFHADBPDJCFGD@FBDHAJKDBLCDBRBFADAB@FJnRtALCDEBEAMBGDCHAHEHY@EBAFBFCBCDDFAFKHOFBDAHIBEPDJKNKDMGEA]VABDDLBDBLBLABB@DDFFDHAHJFCBBDHKFDRIHC@CAAB@BBFGLFFHB@FN@@FDBIH@BDFHDGHDDLHDDXLHHINGHI@EFAFBHEHJFBDBJLFDF@JCDCBIIEBQNKPCNBHILBBHBPJDFBJAHBLAHCBODUCYGQFOAGACCAEBE@GAIEGECM@eLSLQZGPCZADIDCFGDLTHJDDBHFPEXJNNLNHZHbR`XHLBDAFELYTEJCF@LFHVP^NJFHHLDTHLH@F@HOLCD@RJRBPAVFDRH\\FLLGHIV@NDFZTF@@CEE@GDEJGJ@LPLTPLDDTDLADBJJOLJ^DDNDDAJSJKJFHFFNJTDPHPBFDBD@FCDEHEHDJFBHJD@RDFJFDJD@FADCDGRATHPJJJXRnBLBXPLB\\EH@rZXHJ@J@LCNOLETENEXANGDEHA\\AbN\\DTEFCL@LJTVVJH@JCNMHBTVHHJBJBLALE^GPIJU@MBEDCVG\\EPERBHAPENQLELGJCPIRQBG@KIKQOEGBGFGNSBSAMQK@EBGDEHGXE`GTGFEHAPDFADCBGAGAA@CDE^W@AIQJMBECUGGSEIIGCCA@MEGQKIA@AJEJIDK@CCAM@aUOBKGE@]HEJEBEAIKECQBcJG@EC@CJGBG@UFCEI@CCWBCJECGDG@CCCM]]CEBGDGCIICO@IAAC@ACEcIO@EBADAHALEFEAIDGCG@MIUJIJCJG@EAASEIO@IDELKRCNIRCLI@CAIDISQACBGLIAC@EPCJIHCDK@[FMHIDFDBBFFFADHDBG@CDEG@@IECGKTBBNDDCFHHADFBDBD@NJDC@CFGEG@GBAGCACPWF@@AHCJABA@CDBAH@FPDBAB@ACD@DDFAFD@AHABADAFEJBFEHAFKLKFK@ILCFDD@BADIFAJBJABEDA@AGGCGKGQUSGEEAIBIJALDF@RHHFJBFDHBJFLDNAHHD@B@HGRABA@GHOBSFAFGBG@KFIDK@MF@FEHQ@GFED@BAAADEQKJK@EHDDGPCL@DCHAPILB^A@BH@DCH@BCFBFE@CHEECDKHCDEFCBCECA@AADCBICA@EDADBB@AA@GDAAEACDABIACDA@FDBB@CABCD@DB@ABAD@@AEABCA@@EIAA@LEAC@ED@HCB@DCCAI@ACA@BA@AFBDCDA@EDAAAGDCCFEDDBA@A@EBEECKCAGCADEACFADDLBDAFGDBFABCNG@CGBAC@CFA@CAA@AF@DENDFCDEAAC@@A@C@EDCAABECEBIEEJACCGCE@CCDACCB@@EFMDA@ADEFABCCAAMEBAAB@@A@BAAAB@A@CCABA@ACCCBBCC@EA@BDBADGCAABEDAEG@CBAACDAD@DDB@BAACBE@EDA@@BBBA@AC@@AAAEBGCDCAGDCAEKBAGAABEFEAADCCEBCNE@CBANCAAKAAADIBBDEFE@CAACJA@DIC@DECD@CDCBACA@ADB@EHC@CCCDADBHJBBDGHCDEGG@CGABC@CEB@BA@GC@CIB@A@ACB@BCDC@ECEGNKDDHCBBFABBF@BBDAHCFIDAD@FMFCDBFDADD@B@@DDA@AF@FAHF@AAA@CD@HGAGJ@@AAEK@CAAC@AEABCC@CA@AHG@EGDADC@FOGMEO@EEKGAEIDAFBDA@CC@G@BCAAEDOEAC@EMIAEBAFDF@DCBIDEZKPe@KJCBCBS@EFABECKDCDD@BDAAAOG@AD@FBB@@GB@BJD@@EBBBHAFF@HKAEEEACBEA@CFA@ECGAAA@EACQUE@AAYMKCIEAJA@ECI@QMIAIEAAAEMAGE@CIGKCG@CDEAIGGI@EICMAEABIACEEEKIBA@cQKG@EJKRKLCJYNEVDLETADABCAO@GJOCCOKQEAGAAHKAIBCJKBC@AQEEE@MFIAGEIBKAKEGWECBAFE@UBKCIDEBcOODGCM@OGUQEASNKMWQUEEBCAIGKEE@EFA@GCK@KHKDSBMHIEKCM@CC@CSK@EIEBQJIDGBKACIGG@OBGFEBCMKGEEAK@IBECOJW@ECAIAK@UDCDAPEFMFGCM@CACAA@EBELEDC@QAMKE@CBG@GCKTCBOOCOEGKGYGG@EDCHCBUHE@GAGGEEG@OEEIII@GQ@GEQDEASGIAMICBCJCDCBEAIMCEYOIEWEKEIOICGEAIGEMCCAAEBIDICKEIAMDIFCBEACIKISCCK@EEOMCGEUOIIKGAGBEDGJSNGPIHELABGAGIECA@GDC@IGC@MJGRGLSHKJuREFU@ED@BEBADAHDZEFGHEPMHABAD@HDHBFCL@TCBDNMHKGGMGDGHCNHRAFEDCHGDEDM@UHEF@LCBMAUOCYCIECk_KQGBA@AFIBELEBMCEIGCABUDCFAHDHDFHNLPFnHTXfBHB`AJG\\@\\EFAHYdGRGNGFMDuH_JKH_PSBO@SEG@QH[RaFUBOHCJANBFRPDJBRINGTALFJJJJNFBHBHDAHBFBBHDBJGLID@DCFAHDDCFAFID@BFD@BGBCDGAMBGAEBDFIBDHBHOfBDFBRCPBHJAPBFRTHF^NHBJDDV@JFPJPBDAFSLOPBPBHDJLNNVDR@LAHIRCR@HCJC^ET@JBP@JDP@FAJWRWlQXGLGZANCHGFKHEDO@IBORMEA@BDFDBBKBOEBEDC@IAG@ACAAC@GAEIIGCE@UG_Q]M]SKCGHEFOJMFWDULOJQRCFCFOHMB[KMIEKBSPaAMGSOSOOAISGIEEGICBCDA@ACC@ECEGA@ACGCDCNE@AAADBBADCBG@@DBBCHENQVE@C@GCCIICUB_Eg@ECEEAMEOOCaJCCBYFKRYHODIEKS[Y[ESAIHMNMBK@IGGGEG@ICIAE@eAIBMAuiEEM[GDKRI\\CD[LIJC\\IPEFQFIBCEKIKSOMGCICQDMAYCUGY@GDOJcTS@_GCCMCEECDEHGBEDAFBFABAJFDBFH@@HFDJBHD@DADFFVEADMJAFGDE@BLJFGH@FJLATIVORKJUNKJAFEHWTMTSP[\\OJOPgvQdCNANKPCFKHKP@LNVCH@PCDG@CFBDHNAFAB@DHL@D@RWXQL[JM@[HEDELGHCH@NEBO@FICCGACCCAEDCD@RIB[GkYLZ@FEXGLQLGLCFKFOAC@GHCFADYFYAKBCFELGZ@HLNBDAPAFMN@HDLLLJDTFVCPEJ@fDnHDFHDNDJCBBFD@FCF@DFJBFHHFDH@AJDLN^PVPN`LLFFP@N@XDTAJAFDJAHITLVBHI^GJ@FLFJLJRNLJNRTBHANBBJFD@HCRTKRlØ@ČÖgXaPWHC@ACC@ADDFA@BFG@AD@JCFBJAFABICDDAB@FADMH@BEBOPBHAACB@DDL@HCBC@@FAAABBFEBKHKTAFEDBFCBEBDFABFBBBBDCDBB@DFDBDDAFGD@B@BJ@JCDGBADDBDAFFDBFFGRC@@BGB@BCBAFB@EDED@DDFIDAF@FADFD@DMHAHEBE@IHEHAF@LDRHLXRFH@HEJCFQPEFCL@FFLLPFNBPBRGVAFKHQDEDWTCF@F@HFRX^PHR@dKbCHCJKFKNKJETCV@`H^LFDT`FJFBDBLA`MFBNJXM`MAEBAB@DCBECGD@BCAKBAACBCLBFFTbHFLBHFHJFDFANKLFLEF@DACEGQAC@EBC@CDCFAFDNEpChJVNPXTVJLDHPNTHx^TPXLRFTBZHFDJJLXHJNHRFV@xIZFXPHD^FDB"],
                "encodeOffsets": [[119902, 30413]]
            },
            "properties": {"cp": [117.971185, 28.44442], "name": "上饶市", "childNum": 1}
        }],
        "UTF8Encoding": true
    });
}));