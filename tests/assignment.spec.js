const { test, expect } = require('@playwright/test');

const scenarios = [
    { 
        id: 'Pos_Fun_0001', 
        input: 'campus tech news valata anuva, me kaledhi AI tools use karana university students gaena loku discussion ekak athivela thiyenava. samahara students la hari  excited velaa  tools  try karanava, mokadha work eka easy easy venne kiyala. haebaei , lecturers la careful venna kiyala avavaadha karanava. technology eka  help karagaththath, eeka mathama  depend  venna epaa kiyala academic unit eken statement ekak issue karala thiyenava.', 
        expected: 'campus tech news වලට අනුව, මෙ කලෙදි AI tools use කරන university students ගැන ලොකු discussion එකක් අතිවෙල තියෙනව. සමහර students ල හරි  excited වෙලා  tools  try කරනව, මොකද work එක easy easy වෙන්නෙ කියල. හැබැඉ , lecturers ල careful වෙන්න කියල අවවාද කරනව. technology එක  help කරගත්තත්, ඒක මතම  depend  වෙන්න එපා කියල academic unit එකෙන් statement එකක් issue කරල තියෙනව.' 
    },
    { 
        id: 'Pos_Fun_0002', 
        input: 'faculty notice ekak anuva, new attendance rule ekak introduce karala kiyala campus news valin dhaenaganna laebunaa. students la kiyannee rule eka strict  vennva kiyala. samahara classes vala sign  karanna biometric system ekak use karanava. namuth, management eka  explain karala kiyannee  fair system ekak hadhanna thamayi meeka kiyala. students la  hemihita adapt venna hadhanava kiyala feedback labunaa.', 
        expected: 'faculty notice එකක් අනුව, new attendance rule එකක් introduce කරල කියල campus news වලින් දැනගන්න ලැබුනා. students ල කියන්නේ rule එක strict  වෙන්න්ව කියල. සමහර classes වල sign  කරන්න බිඔමෙට්‍රිc system එකක් use කරනව. නමුත්, management එක  explain කරල කියන්නේ  fair system එකක් හදන්න තමයි මේක කියල. students ල  හෙමිහිට adapt වෙන්න හදනව කියල feedback ලබුනා.' 
    },
    { 
        id: 'Pos_Fun_0003', 
        input: 'adha nivaadu dhavasak nisaa kaaryaalaya vasaa aetha kiyalaa dhaenviimak dhaala thibunaa. eeth adha pohoya dhavasak novena nisaa kaaryaalaya vivRUthava aethi kiyala hithala  minissu godak aevith eliye balan hitiyaa. nilaDhaaringe mevaeni kisim vagakiimaka naethi vaeda nisaa godak minissu adha apahasuthaavayata pathvuna. ovunta miita vada vagakiim sahagatha lesa katayuthu karanna puluvan nam eya godak hodhayi kiyala mama hithanava.', 
        expected: 'අද නිවාඩු දවසක් නිසා කාර්යාලය වසා ඇත කියලා දැන්වීමක් දාල තිබුනා. ඒත් අද පොහොය දවසක් නොවෙන නිසා කාර්යාලය විවෘතව ඇති කියල හිතල  මිනිස්සු ගොඩක් ඇවිත් එලියෙ බලන් හිටියා. නිලධාරින්ගෙ මෙවැනි කිසිම් වගකීමක නැති වැඩ නිසා ගොඩක් මිනිස්සු අද අපහසුතාවයට පත්වුන. ඔවුන්ට මීට වඩ වගකීම් සහගත ලෙස කටයුතු කරන්න පුලුවන් නම් එය ගොඩක් හොදයි කියල මම හිතනව.' 
    },
    
    { 
        id: 'Pos_Fun_0004', 
        input: 'vidhuhalpathithumani karuNaakaralaa apita usas peLa aQQshayee Art exhibition eka pavathvana dhinaya piLibaDHAva obathumaage avasan thiiraNaya dhaenagan puluvandha? apita eya kal aethiva dhaenaganna haeki vunoth pera suudhaanam venna haekiyi. eenisa ee pilibadhava obathumaagee avadhaanaya yomu karanna puluvandha? ', 
        expected: 'විදුහල්පතිතුමනි කරුණාකරලා අපිට උසස් පෙළ අංශයේ Art exhibition එක පවත්වන දිනය පිළිබඳව ඔබතුමාගෙ අවසන් තීරණය දැනගන් පුලුවන්ද? අපිට එය කල් ඇතිව දැනගන්න හැකි වුනොත් පෙර සූදානම් වෙන්න හැකියි. ඒනිස ඒ පිලිබදව ඔබතුමාගේ අවදානය යොමු කරන්න පුලුවන්ද?' 
    },
    { 
        id: 'Pos_Fun_0005', 
        input: 'mama iiyee ammata kathaa kalaa havasa 5 ta vithara. ee velavee eyaa kivva heta beheth ganna yanavaa kiyala. oyaatath puluvandha heta ammath ekka beheth ganna hospital ekata yanna? mama oyaata salli dhaannam. vaahanayak hire ekata aran yanna. oyaa inna eka ammata loku pahasuvak veyi kiyala mama hithanavaa', 
        expected: 'මම ඊයේ අම්මට කතා කලා හවස 5 ට විතර. ඒ වෙලවේ එයා කිව්ව හෙට බෙහෙත් ගන්න යනවා කියල. ඔයාටත් පුලුවන්ද හෙට අම්මත් එක්ක බෙහෙත් ගන්න hospital එකට යන්න? මම ඔයාට සල්ලි දාන්නම්. වාහනයක් hire එකට අරන් යන්න. ඔයා ඉන්න එක අම්මට ලොකු පහසුවක් වෙයි කියල මම හිතනවා' 
    },
    { 
        id: 'Pos_Fun_0006', 
        input: 'adha varthamaanayee Whatsapp, Facebook, Instagram, YouTube vaeni social media platforms minissu athara godak prasidhDhayi. eevaayee godak vaedhagath content share karala thiyanavaa.  eemagin apita nodhanna godak dheval gaena dhaenuvath venna puluvan.  eenisa mama hithanavaa social media vala positive impact eka vaedii kiyalaa', 
        expected: 'අද වර්තමානයේ Whatsapp, Facebook, Instagram, YouTube වැනි social media platforms මිනිස්සු අතර ගොඩක් ප්‍රසිද්ධයි. ඒවායේ ගොඩක් වැදගත් content share කරල තියනවා.  ඒමගින් අපිට නොදන්න ගොඩක් දෙවල් ගැන දැනුවත් වෙන්න පුලුවන්.  ඒනිස මම හිතනවා social media වල positive impact එක වැඩී කියලා' 
    },
    { 
        id: 'Pos_Fun_0007', 
        input: 'mata presentation eka karanna baehae. ee Power Point eka mama laga naehae.', 
        expected: 'මට presentation එක කරන්න බැහැ. ඒ Power Point එක මම ලග නැහැ.'
    },
    { 
        id: 'Pos_Fun_0008', 
        input: 'eyaata MSG ekak dhaanna', 
        expected: 'එයාට MSG එකක් දාන්න' 
    },
    { 
        id: 'Pos_Fun_0009', 
        input: 'api yamu. oyaala enavadha?', 
        expected: 'අපි යමු. ඔයාල එනවද?' 
    },
    { 
        id: 'Pos_Fun_0010', 
        input: 'next  week ekee 26 venidha udhee 10.30 ta Assignment eka submit karanna thiyanavaa', 
        expected: 'next  week එකේ 26 වෙනිද උදේ 10.30 ට Assignment එක submit කරන්න තියනවා' 
    },
    { 
        id: 'Pos_Fun_0011', 
        input: 'ado weekend eka ela plan ekak . movie ekak balala passe pizza kana idea ekak thiyenava', 
        expected: 'ado weekend එක එල plan එකක් . movie එකක් බලල පස්සෙ pizza කන idea එකක් තියෙනව' 
    },
    
    { 
        id: 'Pos_Fun_0012', 
        input: 'ovun kiyana vidhihata eya USD 150 k pamaNa venavaa', 
        expected: 'ඔවුන් කියන විදිහට එය USD 150 ක් පමණ වෙනවා'
    },
    { 
        id: 'Pos_Fun_0013', 
        input: 'mama gihin ennam', 
        expected: 'මම ගිහින් එන්නම්' 
    },
    { 
        id: 'Pos_Fun_0014', 
        input: 'mata hithenava mee vaedee hariyanne naee', 
        expected: 'මට හිතෙනව මේ වැඩේ හරියන්නේ නෑ' 
    },
    { 
        id: 'Pos_Fun_0015', 
        input: 'eyaata vahaama eya naevatha karanna kiyanna', 
        expected: 'එයාට වහාම එය නැවත කරන්න කියන්න' 
    },
    { 
        id: 'Pos_Fun_0016', 
        input: 'mama eeka balannam. oyaatath monavahari ee gaena dhaenaganna oonedha?', 
        expected: 'මම ඒක බලන්නම්. ඔයාටත් මොනවහරි ඒ ගැන දැනගන්න ඕනෙද?' 
    },
    { 
        id: 'Pos_Fun_0017', 
        input: 'oya hari hoDHA idea ekak dhunnaa. api decision ekak ganna kalin eeka gaena podi discuss ekak karala balamu, mokadha time eka hari naee kiyala hithenavaa.', 
        expected: 'ඔය හරි හොඳ idea එකක් දුන්නා. අපි decision එකක් ගන්න කලින් ඒක ගැන පොඩි discuss එකක් කරල බලමු, මොකද time එක හරි නෑ කියල හිතෙනවා.' 
    },
    { 
        id: 'Pos_Fun_0018', 
        input: 'hari eeka avulak naee', 
        expected: 'හරි ඒක අවුලක් නෑ' 
    },
    { 
        id: 'Pos_Fun_0019', 
        input: 'sir karunaakara mata mee liyuma athsan karala dhenna puluvandha?', 
        expected: 'sir කරුනාකර මට මේ ලියුම අත්සන් කරල දෙන්න පුලුවන්ද?' 
    },
    { 
        id: 'Pos_Fun_0020', 
        input: 'Gampaha town ekee idhala 5km k vithara yanna thiyanavaa', 
        expected: 'Gampaha town එකේ ඉදල 5km ක් විතර යන්න තියනවා' 
    },
    { 
        id: 'Pos_Fun_0021', 
        input: 'oyaa saniipen innavadha?', 
        expected: 'ඔයා සනීපෙන් ඉන්නවද?' 
    },
    { 
        id: 'Pos_Fun_0022', 
        input: 'mama parakku velaa assignment submit kalee GitHub ekata. errors vagayak thibuna eevaa fix kalaa. oyaa mokadha karagathee? hariyatama velaavata submit karaganna puluvan vunaadha?', 
        expected: 'මම පරක්කු වෙලා assignment submit කලේ ඟිට්හුබ් එකට. errors වගයක් තිබුන ඒවා fix කලා. ඔයා මොකද කරගතේ? හරියටම වෙලාවට submit කරගන්න පුලුවන් වුනාද?' 
    },
    { 
        id: 'Pos_Fun_0023', 
        input: 'oya eeka karala nae', 
        expected: 'ඔය ඒක කරල නැ' 
    },
    { 
        id: 'Pos_Fun_0024', 
        input: 'mama gedhara yanavaa.oyaa enavadha maath ekka yanna?', 
        expected: 'මම ගෙදර යනවා.ඔයා එනවද මාත් එක්ක යන්න?' 
    },
    { 
        id: 'Pos_Fun_0025', 
        input: 'eka poddak amaaruyi vagee', 
        expected: 'එක පොඩ්ඩක් අමාරුයි වගේ' 
    },
    { 
        id: 'Pos_Fun_0026', 
        input: 'oyaa eeka hariyata kiyavalaa naehae.', 
        expected: 'ඔයා ඒක හරියට කියවලා නැහැ.' 
    },
    
    { 
        id: 'Pos_Fun_0027', 
        input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee', 
        expected: 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ' 
    },
    { 
        id: 'Pos_Fun_0028', 
        input: 'eka poddak amaaruyi vagee', 
        expected: 'එක පොඩ්ඩක් අමාරුයි වගේ' 
    },
    { 
        id: 'Pos_Fun_0029', 
        input: 'oyaa kivva hari thamayi, mee paata lassanayi balapu paatata vadaa', 
        expected: 'ඔයා කිව්ව හරි තමයි, මේ පාට ලස්සනයි බලපු පාටට වඩා' 
    },
   { 
        id: 'Neg_Fun_0001', 
        input: 'adha udhee idhalama tika tika vaessa thibuna nisa mata hithuna velavata enna baeri veyi kiyala. eeth mama vaehi podha vaeti vaeti thiyedhdhima kohomahari gedharin aavaa. eeth mama dhaekkaa godak minissu paaree themi themi innavaa yanna bas ekakvath naethuva. mata ee minissu dhaekkama dhuka hithunaa', 
        expected: 'අද උදේ ඉදලම ටික ටික වැස්ස තිබුන නිසා මට හිතුන වෙලවට එන්න බැරි වෙයි කියල. ඒත් මම වැහි පොද වැටි වැටි තියෙද්දිම කොහොමහරි ගෙදරින් ආවා. ඒත් මම දැක්කා ගොඩක් මිනිස්සු පාරේ තෙමි තෙමි ඉන්නවා යන්න බස් එකක්වත් නැතුව. මට ඒ මිනිස්සු දැක්කම දුක හිතුනා' 
    },
    { 
        id: 'Neg_Fun_0002', 
        input: 'ado machan adha patta boring', 
        expected: 'aado මචන් අද පට්ට boring' 
    },
    { 
        id: 'Neg_Fun_0003', 
        input: 'ado machan, adha lecture eka full boring. sir katha katha gihin gihin slide eka witharai penne. break ekak enakan wait wait karala thama survive une.', 
        expected: 'ස්ඩො මචන්, අද lecture එක full boring. sir කත කත ගිහින් ගිහින් slide එක wඉතරෛ පෙන්නෙ. break එකක් එනකන් wait wait කරල තම survive උනෙ.' 
    },
    { 
        id: 'Neg_Fun_0004', 
        input: 'ela machi, assignment eka last minute hariyata complete una. night pura awake wela coffee coffee bonna una, habai submit karapu gaman relief eka supiri.', 
        expected: 'එළ මචං, ඇසයින්මන්ට් එක අන්තිම මොහොතේ හරි හරියටම ඉවර කරගත්තා. රෑ තිස්සේ නොනිදා කෝපි බිබී තමයි ඉන්න වුණේ. හැබැයි සබ්මිට් කරපු ගමන් දැනුනු සහනය නම් සුපිරි!' 
    },
    { 
        id: 'Neg_Fun_0005', 
        input: 'ane manda, bus eka late late nisa class eka miss una. attendance eka gone kiyala hithala mood eka off off. adha nam unlucky day ekak.', 
        expected: 'අනේ මන්දා බං, බස් එක පරක්කු වුණ නිසා ක්ලාස් එක මිස් වුණා. ඇටෙන්ඩන්ස් නැති වෙයි කියලා හිතිලා මූඩ් එකත් අවුල් ගියා. අද නම් හෙනම අන්ලකී දවසක්.' 
    },
    { 
        id: 'Neg_Fun_0006', 
        input: 'machan, canteen food eka adha siraavata hondatama thibba. rice ekath spicy spicy, sambol eka ela. price eka nam podi wadi.', 
        expected: 'මචං, අද කැන්ටිමේ කෑම සිරාවටම හොඳට තිබුණා. රයිස් එකත් හොඳට සැරට තිබුණා, සම්බෝලයත් එළ. හැබැයි ගණන් නම් පොඩ්ඩක් වැඩියි' 
    },
    { 
        id: 'Neg_Fun_0007', 
        input: 'ane manda, adha lab eka hari slow. computers tika hang wela, vaedak karanna time eka hari waste una.', 
        expected: 'අනේ මන්දා බං, අද ලැබ් එක හරි slow. computers එකට hang wela, vaedak karanna time eka hari waste una.' 
    },
    { 
        id: 'Neg_Fun_0008', 
        input: 'oyaata puLuvannam, me document eka submit karanna kalin poddak review karala balanna. ehema kaloth mistakes adu wenna puluwan.', 
        expected: 'ඔයාට පුළුවන්නම්, මේ ඩොකියුමන්ට් එක සබ්මිට් කරන්න කලින් පොඩ්ඩක් රිවීව් කරලා බලන්න. එහෙම කළොත් වැරදි (mistakes) අඩු වෙන්න පුලුවන්' 
    },
    { 
        id: 'Neg_Fun_0009', 
        input: 'karuNaakaralaa poddak inna.', 
        expected: 'කරුණාකර පොඩ්ඩක් ඉන්න.' 
    },
     { 
        id: 'Neg_Fun_0010', 
        input: 'oyaata puLuvannam, me week ekata adaal assignment submission date eka poddak extend karanna salakaa balanna kiyala karuNaaven illaa sitinawa. samahara unavoidable personal kaaraNa nisa work eka niyamitha welavata avasan karanna apahasu una. ehema unath, quality eka adu wenna epa kiyala mama me request eka idiripath karanawa.', 
        expected: 'මෙම සතියට අදාළ පැවරුම (Assignment) භාර දිය යුතු දිනය මඳක් දීර්ඝ කර දෙන ලෙස කාරුණිකව ඉල්ලා සිටිමි. මඟ හැරිය නොහැකි පෞද්ගලික හේතූන් කිහිපයක් නිසා නියමිත වේලාවට වැඩ අවසන් කිරීමට අපහසු විය. කෙසේ වෙතත්, පැවරුමේ ගුණාත්මකභාවය (Quality) අඩු නොවිය යුතු බැවින් මම මෙම ඉල්ලීම ඉදිරිපත් කරමි' 
    },
    { 
        id: 'Neg_Fun_0011', 
        input: 'oya eeka karala nae', 
        expected: 'ඔයා ඒක කරල නෑ' 
    },
    { 
        id: 'Neg_Fun_0012', 
        input: 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa', 
        expected: 'අපි කෑම කන්න යනවා සහ පස්සේ චිත්‍රපටයකුත් බලනවා' 
    },
    { 
        id: 'Neg_Fun_0013', 
        input: 'morning ekedi meeting ekak thiyenawa habai habai professor eka late wela thiyenawa. library ekedi podi research karala notes ekak hadanna puluwan habai habai students ekka podi noise ekak thiyenawa. hostel ekedi movie balamu habai habai time eka rush wela thiyenawa.', 
        expected: 'උදේ මීටින් එකක් තියෙනවා හැබැයි ප්‍රොෆෙසර් පරක්කුයි. ලයිබ්‍රරි එකේ පොඩි රිසර්ච් එකක් කරලා නෝට් එකක් හදන්න පුළුවන් හැබැයි ළමයි එක්ක පොඩි සද්දයක් තියෙනවා. හොස්ටල් එකට වෙලා මූවි එකක් බලන්න පුළුවන් හැබැයි කාලය හරිම සීමිතයි' 
    },
    { 
        id: 'Neg_Fun_0014', 
        input: 'hari lassanata weda karala', 
        expected: 'හරි ලස්සනට වැඩ කරලා' 
    },
    { 
        id: 'Neg_Fun_0015', 
        input: 'machan assignment eka explain karapan', 
        expected: 'මචං assignment එක explain කරපන්' 
    },
    { 
        id: 'Neg_Fun_0016', 
        input: 'sunaamiyak avath mee vaeda tika iawara karala thamai yanna vennee', 
        expected: 'සුනමියක් අවත් මේ වැඩ ටික ඉවර කරලා තමයි යන්න වෙන්නේ' 
    },
    { 
        id: 'Neg_Fun_0017', 
        input: 'heta vahaama enna udhee 10.00 venna kalin.', 
        expected: 'හෙට වහාම එන්න උදේ 10.00 වෙන්න කලින්' 
    }    
];

test.describe('Singlish Translation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { 
            waitUntil: 'load', 
            timeout: 60000 
        });
    });

    for (const data of scenarios) {
        test(`Testing ${data.id} - ${data.input}`, async ({ page }) => {
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            
            await page.waitForTimeout(1000);
            await inputField.fill(''); 
            await inputField.fill(data.input); 

            await page.waitForTimeout(7000); 

            const outputField = page.locator('.card').filter({ hasText: 'Sinhala' }).locator('div.whitespace-pre-wrap');
            const actualText = (await outputField.innerText()).trim();

            console.log(`Test ID: ${data.id} | Input: ${data.input} | Expected: ${data.expected} | Actual: ${actualText}`);

            expect(actualText).toBe(data.expected);
        });
    }
});