import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function About() {
  const isLogin = true;

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  return (
    <div>
      <nav>
        <button onClick={() => navigate(-1)}>Back to page</button>
        <button onClick={() => navigate(1)}>Next to page</button>
      </nav>
      {isLogin ? <Outlet /> : null}
      <footer>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi a
        recusandae id minus repellat assumenda quis voluptatibus! Magnam dolor
        temporibus, quae eius veniam, laborum alias excepturi omnis inventore
        harum dolore! Minus, provident? Rem similique beatae delectus at
        aspernatur quam maxime minus natus repudiandae! Iste eius id placeat
        voluptatum quaerat, veritatis labore quo. Deserunt autem dignissimos
        totam nesciunt eos, sed rerum. Dolores, quisquam. Recusandae animi, odio
        quod dolorum, assumenda, saepe vitae sapiente dicta ut illo optio minima
        soluta officia fuga temporibus nam nesciunt quae aut? Mollitia totam
        delectus illum iure voluptate. Pariatur, distinctio beatae! Consectetur
        delectus laboriosam exercitationem alias, ducimus suscipit accusantium
        architecto autem quis soluta culpa quas et, explicabo laudantium
        reiciendis quisquam. Quasi facere iure adipisci minima, accusantium
        natus repellat! Inventore magni consequatur modi eius ea alias ullam
        quisquam vitae velit, ducimus dignissimos rem aliquam nesciunt minima
        iure labore quis delectus sequi autem mollitia recusandae dolorum illo
        optio. Omnis, veritatis! Ratione itaque quas natus, quisquam at, quos
        rerum temporibus adipisci pariatur impedit saepe sequi! Quibusdam saepe
        iusto nihil dolores modi? Velit qui neque sequi deleniti quos! Tenetur
        eveniet numquam dolore. Dolore dolores, minima, asperiores itaque
        quisquam architecto at quis doloribus voluptatibus nobis cumque totam
        nemo quidem voluptate numquam adipisci nihil? Asperiores voluptas ullam
        voluptatibus fugiat, autem ipsum soluta quam reiciendis! Ullam
        cupiditate iste nihil architecto, consequuntur et in, excepturi quisquam
        debitis doloribus quibusdam necessitatibus voluptatem eius facere illo
        amet, rerum autem sapiente vitae tempore optio itaque veritatis?
        Repudiandae, consequatur debitis! Aliquam, eum enim. Atque, provident
        odit. Exercitationem, at excepturi hic ipsum amet, laudantium quis porro
        voluptate, consequatur nulla voluptatum. Corrupti laudantium consequatur
        sunt non omnis. Numquam maiores ratione ullam et. Totam fuga, pariatur
        omnis hic accusantium architecto delectus nam magni praesentium
        voluptatem quia iure, tempore doloribus perspiciatis beatae dolore, sunt
        quibusdam. Labore, nulla sit quo libero molestiae commodi facilis
        incidunt! Corrupti cupiditate earum hic culpa sit neque! Eos architecto
        harum hic, natus fugit esse odio voluptate corrupti molestiae
        voluptatibus vel molestias aliquam nisi laborum commodi dignissimos,
        quaerat soluta accusantium ea! Necessitatibus aspernatur repellat maxime
        reprehenderit provident similique iusto dicta, consequatur asperiores
        numquam quibusdam veritatis blanditiis inventore vel veniam neque nobis
        repudiandae libero corporis praesentium alias quaerat nostrum deleniti
        dolore. Natus. Ducimus culpa officiis deleniti neque maxime iure optio
        quam, sit voluptatibus accusantium suscipit esse nemo veritatis incidunt
        exercitationem laudantium, facere dignissimos consectetur nobis?
        Aspernatur aperiam odio minima nulla iure voluptatibus. Voluptate libero
        illum veritatis quasi dolore recusandae quo unde odit voluptates qui,
        architecto totam? Quasi maiores eius soluta provident dolore obcaecati,
        cupiditate neque mollitia dolor nihil natus assumenda nobis ipsum.
        Temporibus aperiam, quam modi facere id officia atque reprehenderit unde
        earum illo distinctio velit voluptates ea, ex ipsa in, autem fugiat
        architecto minus nihil recusandae voluptatibus veritatis? Culpa, qui
        temporibus? Nostrum assumenda earum at tenetur fugit ducimus quibusdam
        sapiente? Debitis omnis, ad veritatis natus itaque porro temporibus est
        magnam in? Dolores necessitatibus iste perferendis vel molestiae at
        explicabo voluptate ratione. Sit eius nam accusantium consectetur, ipsa
        est obcaecati eveniet, id illum officia voluptas libero. Delectus,
        soluta. Obcaecati possimus rerum amet corrupti nihil, cum dicta
        consectetur voluptate, nostrum exercitationem, minus tempore. Labore
        commodi quia quidem inventore a necessitatibus obcaecati vel aut tempora
        laudantium, similique maxime, quibusdam, hic officia facilis ea animi
        voluptas! Beatae ea expedita dolor vero officiis, explicabo libero quos.
        Tempora vitae perspiciatis cumque repudiandae excepturi odit neque
        maiores quia assumenda eaque, qui deleniti nesciunt ipsa nisi soluta
        libero. Numquam aliquam autem dicta labore praesentium provident harum
        repellat possimus reiciendis. Delectus fuga incidunt voluptatum harum ad
        eveniet, dolores sit officiis iure, facilis obcaecati saepe vero natus
        dignissimos nostrum molestiae perferendis voluptates rerum aliquid
        explicabo ut facere eos deserunt porro. A. Illum molestiae quisquam quas
        sint eligendi, recusandae maxime! Culpa suscipit officia excepturi ut
        pariatur recusandae, explicabo inventore quam in amet porro nihil natus
        corrupti incidunt. Tempore accusantium quod deserunt unde? Esse libero
        cum commodi deleniti. Consequuntur possimus illum sed harum autem ab in
        ipsa numquam explicabo laboriosam blanditiis commodi obcaecati tempora
        exercitationem voluptatum, quia nostrum, culpa ut? Eos, sed repellat!
        Obcaecati cumque impedit ea reiciendis quae sit voluptates. Perspiciatis
        animi tenetur architecto harum dignissimos. Exercitationem similique
        odit sunt facere dolorem voluptatum, unde accusantium labore, illum id
        officiis expedita autem in? Hic, repellat adipisci? Quasi iure
        temporibus enim eligendi dolores laboriosam eos quia animi, eaque illum
        deserunt, ad neque voluptates veniam quas laudantium harum saepe? Harum
        distinctio adipisci dolores voluptate vero! Ex expedita accusamus dicta
        ut consectetur laudantium atque, sapiente commodi facere aspernatur
        magnam reprehenderit tenetur, quam dolorum beatae, dolorem quidem!
        Impedit earum dolore totam dolorem autem odit excepturi ducimus. Maxime.
        Earum aliquid esse ad dolore, provident ratione nemo aperiam sit unde
        cum impedit, minus doloremque similique quis qui voluptatem, est eaque
        maxime animi autem consectetur. Obcaecati architecto temporibus
        repudiandae cum? Similique sequi quidem totam dolorem amet quae, commodi
        ratione eligendi autem? Et quo ad dolores fugiat ullam a perspiciatis
        placeat enim consectetur officia quas repellat, necessitatibus animi sit
        debitis pariatur? Dolorum esse repellendus neque incidunt qui fuga
        inventore aliquam iste accusantium, nihil aspernatur quisquam ut?
        Laborum sequi eveniet est facilis consectetur. Quas laudantium nisi, a
        earum doloribus atque cum eos! Totam, laboriosam tempore omnis a ratione
        pariatur quisquam saepe facilis consectetur ipsum. Dignissimos
        necessitatibus voluptate doloremque quod laudantium eos obcaecati
        facere. Distinctio ab cupiditate voluptatum cumque ipsum, nam rem quae.
        Cupiditate sint laborum in dicta aliquam recusandae consectetur eligendi
        ipsum explicabo vitae neque ducimus, nihil modi tenetur dolor
        repudiandae rerum deleniti distinctio molestiae. Rerum, laborum tempora
        at aliquid qui voluptatum! Eaque sequi iste consequuntur fugit odit eius
        consequatur molestiae est dicta doloribus accusamus illum libero ad
        nobis, consectetur error quod, recusandae nulla optio tempora aspernatur
        corporis velit tempore. Modi, aliquam? Ipsa facere blanditiis
        necessitatibus, earum nam aut magnam minima similique quos a distinctio
        optio deleniti quidem molestias architecto repellendus velit excepturi.
        Perferendis eos minima eaque temporibus beatae fugit, blanditiis vel.
        Molestiae hic asperiores, cumque quae quas voluptate non dolor
        consectetur molestias ad quia qui sit eos quasi odit aspernatur harum
        amet quaerat modi iusto? Distinctio ut repellendus necessitatibus.
        Consequatur, cumque. Perferendis officia dignissimos eos quas distinctio
        repellat? Iusto exercitationem eveniet nihil illo. Soluta maxime,
        dolores, ex atque quis quo cupiditate nemo amet enim mollitia eos
        deleniti provident perferendis possimus rem! Excepturi illum, autem
        maiores ducimus animi rerum ab, assumenda minus sint est provident
        molestiae? Obcaecati et dignissimos assumenda? Saepe deserunt ut libero
        praesentium porro blanditiis eum veniam illo fuga sunt! Voluptas vel
        omnis voluptatum modi. Id totam corrupti eum dolor eveniet eos expedita
        explicabo rem harum alias ullam dolorum saepe porro ea neque laudantium,
        delectus aut ipsam! Maiores, possimus magnam! Minima, atque iusto,
        ducimus molestias itaque hic tempora voluptatem quam quasi libero sit
        expedita beatae sequi voluptas officia eum saepe minus illo, velit
        blanditiis quidem ullam. Quaerat natus molestiae quibusdam! Asperiores
        excepturi odit, laboriosam aliquam molestias officiis consequatur minus
        libero impedit odio quisquam et architecto sequi, nisi tempora nam!
        Assumenda ea excepturi dolore ut inventore sed ad vitae necessitatibus
        illo. Sit, explicabo. Facere adipisci minus eos quidem laboriosam modi
        maiores. Ut perspiciatis quidem inventore explicabo, accusantium nihil!
        Molestias eligendi, error officiis illum, sed similique vero est
        sapiente quod cupiditate aliquam? In nam pariatur itaque, totam nemo
        ipsam odit labore. Tempora laborum, minus quia explicabo placeat
        sapiente accusantium laudantium provident ducimus! Atque reprehenderit
        eos dolorum hic quis. Illum excepturi ut minima. Commodi, molestias
        cumque porro libero est eveniet ad iste eligendi, quidem distinctio
        necessitatibus obcaecati iusto enim omnis temporibus delectus,
        recusandae aliquid alias architecto pariatur provident quasi! Ducimus
        reiciendis nam atque! At, consectetur harum. Molestias nulla sint
        obcaecati ipsum, nesciunt vitae laborum perspiciatis harum odio rerum
        doloremque culpa iste aperiam voluptate quisquam aut at illo reiciendis
        neque dolore exercitationem! Voluptatem, accusamus. Nihil modi possimus
        quod aliquid sunt, pariatur quam illum asperiores eaque eum voluptate
        aliquam consequuntur quibusdam, error quas sed incidunt ducimus?
        Officiis numquam atque iste, possimus quaerat repellat veritatis vero!
        Inventore tenetur necessitatibus dolores omnis facere veniam eaque qui
        deserunt cumque architecto totam nesciunt dignissimos incidunt maxime
        facilis animi id vero a non, quam excepturi est! Omnis perspiciatis
        porro possimus. Fuga, nam iste. Provident velit, eveniet similique
        quibusdam ratione sunt voluptates dolorum ducimus fugit facilis
        explicabo porro! Ullam incidunt, pariatur ab nihil quae accusamus veniam
        provident quod debitis, dignissimos hic! Eos, cumque? Et a ipsum
        consequatur asperiores eveniet dolore libero beatae pariatur repudiandae
        quas debitis, maxime nihil adipisci unde officia dolor doloribus cum eos
        itaque iusto quia laboriosam id esse! Repudiandae explicabo eius at!
        Nisi voluptate itaque quisquam sequi, et facere voluptatem eum placeat
        accusamus deleniti officia labore a? Nihil accusamus dicta eligendi
        magni ipsam aspernatur amet sapiente vero dolore! Adipisci voluptates
        praesentium id neque quibusdam inventore nulla. Perferendis modi
        mollitia delectus vero amet nihil, sint debitis quos odit, expedita
        esse? Adipisci sint similique voluptatibus molestiae rem ducimus eum
        facere? Corrupti mollitia nesciunt expedita quas eius optio, corporis
        suscipit minima laudantium consectetur ipsum molestias tenetur incidunt
        facere, illo perferendis aut numquam nemo, voluptatibus eveniet! Nostrum
        blanditiis recusandae enim eligendi laborum. Perspiciatis saepe quos
        provident tenetur voluptate laudantium, maiores nisi labore rem
        perferendis debitis error illum aliquam temporibus quaerat assumenda
        odio veniam neque? Rerum exercitationem laudantium atque ratione minima,
        quos dicta! Rerum dolor tempore facere voluptatum dicta earum minus
        labore nobis atque accusamus officiis, porro neque unde obcaecati harum?
        Labore commodi qui veniam! Architecto provident veritatis hic
        consequuntur cumque obcaecati doloremque! Et deleniti laboriosam, rerum
        doloremque, perspiciatis natus, impedit ipsa reiciendis accusamus maxime
        rem dignissimos ipsam ullam nihil aspernatur architecto alias. Iure
        vitae fuga quidem necessitatibus quos autem eaque sapiente nobis! Sit,
        cupiditate eos ipsam accusantium minima quibusdam sed quasi amet
        perspiciatis cumque, tempora odit recusandae, magnam molestiae mollitia.
        Amet deleniti distinctio animi iusto in aspernatur accusantium delectus
        a itaque nobis? Autem, dolorum dignissimos. Possimus recusandae ea
        aperiam voluptatem pariatur vitae odio in consequatur explicabo vero
        earum voluptatibus laboriosam rerum, saepe veniam quibusdam placeat
        fugit quisquam beatae provident fugiat. Minus, nam. Dicta, ullam rerum.
        Eos, dolore accusamus repellendus, nesciunt pariatur dicta molestias
        impedit, provident eaque reprehenderit cupiditate! Ex iure et vero
        illum, fugiat consectetur sint aspernatur quidem! Nihil tenetur amet
        deleniti! Optio nihil voluptate quisquam! Porro voluptatibus, aliquam
        quaerat fugiat libero ut corrupti minima quam perferendis cumque
        similique impedit sint dicta, error ipsam temporibus, aliquid iure
        dolor! Iure autem aut obcaecati. Culpa amet quas provident, a molestias
        repudiandae incidunt ut id nisi ullam laborum maxime cupiditate officiis
        veritatis nam. Quis quasi mollitia delectus odio aperiam? Vel laudantium
        pariatur laborum commodi dicta! Nam nihil corporis, perspiciatis
        doloremque soluta quos incidunt dolorem itaque maxime sed, temporibus
        laboriosam necessitatibus, in placeat veritatis voluptatem sit iure
        reiciendis quisquam! Atque, aspernatur tenetur inventore aperiam hic
        sed. Corporis quam nam aspernatur? Fuga quam excepturi quidem ut sunt
        error consequuntur reiciendis eos. A omnis ab impedit beatae hic.
        Explicabo architecto odit officia ratione illo deleniti iste dignissimos
        sunt. Corrupti, sequi! Debitis eaque optio, temporibus repudiandae
        vitae, voluptatem cum quidem quam culpa voluptate reprehenderit aliquid
        in amet laboriosam doloremque quaerat corrupti quo cupiditate! Quam
        eaque veritatis impedit beatae officiis? Suscipit expedita unde eos
        veniam consequuntur necessitatibus at quibusdam modi quaerat
        perspiciatis mollitia animi ea, cum illo. Facere, eligendi magnam
        reiciendis fugit inventore possimus, voluptate a aut quasi, amet vel.
        Earum amet ipsum placeat nulla recusandae totam, debitis odio omnis quae
        error, temporibus libero culpa, nobis sint maxime consectetur officia
        tenetur. Id, nam qui laboriosam eos molestiae quae itaque accusamus?
        Cupiditate perspiciatis est a modi iste ad veritatis, dolor, velit,
        delectus natus error molestias explicabo quae similique nesciunt dolore
        architecto corporis omnis. Harum iure quisquam placeat laborum impedit
        itaque quibusdam? Quasi, ipsum magni! Ex possimus laudantium cum soluta
        sapiente voluptate laboriosam asperiores illum obcaecati rem rerum, ut
        eveniet maiores dolores ipsam facilis odio voluptatem molestiae nihil,
        alias nisi ullam non. Dolore, voluptatum? Dignissimos, labore ipsam?
        Consectetur non neque doloribus quia laborum aperiam commodi nihil porro
        alias? Architecto sed illo ipsam iste, minus id minima necessitatibus,
        doloribus dolorem harum laborum nisi. Facilis rem ut rerum perspiciatis
        commodi deserunt, quam facere nostrum inventore! Omnis cupiditate
        aperiam architecto incidunt doloribus quos excepturi magni possimus
        ullam, maxime illo molestias similique repellendus veniam nulla?
        Necessitatibus. Voluptates reiciendis eos non magnam exercitationem
        consequuntur facere debitis, possimus, saepe corporis neque fugit
        mollitia culpa voluptatem laudantium veritatis necessitatibus cumque
        vero iure, beatae optio. Vero officia voluptatibus repellat fugit.
        Placeat dignissimos iusto soluta quia temporibus molestias dolores cum
        ipsum incidunt facilis, nobis animi sapiente, ad odio eos dolorum. Non
        omnis nesciunt expedita cupiditate animi impedit porro. A, in fugiat!
        Sint, magni rem? Alias, ratione. Ab deleniti similique obcaecati
        assumenda dicta aspernatur cupiditate vel soluta recusandae corporis
        aliquam temporibus itaque quasi, esse, quisquam et. Dolores aliquam
        aliquid architecto itaque repellat. Autem, ipsam hic necessitatibus quis
        nam maxime, facilis quaerat accusantium dicta pariatur vitae. Animi
        quaerat ut, eligendi nam eos, modi adipisci quibusdam, dolores provident
        recusandae ab non ullam omnis architecto. Asperiores tempora cumque ipsa
        harum quam? Dolorum, odit nobis voluptatem totam iusto, alias iste hic
        nostrum voluptate cum aperiam laudantium quibusdam ut doloremque quis a.
        Facere sed eveniet error culpa! Id qui eaque veritatis porro possimus
        dolor exercitationem accusantium eos impedit facere. Voluptatem,
        blanditiis provident. Eius numquam voluptate obcaecati necessitatibus
        quos quae fugiat aspernatur, nulla saepe aliquam modi impedit quam!
        Corporis nisi neque ab odit quae est temporibus quas veritatis omnis
        asperiores ea accusantium aut tempora distinctio iste aliquid, repellat
        obcaecati officia iure praesentium unde, fugiat dolorum doloribus
        quisquam! Dicta. Ratione voluptates maxime laborum, dolore doloribus
        nemo repudiandae, eius, non maiores dolorem praesentium assumenda
        distinctio culpa. Adipisci similique officiis rem tempore, harum in non
        blanditiis laboriosam et laborum enim ipsum. Cum minima quis, quas
        voluptate blanditiis accusamus eum neque facilis eius? Iste,
        repudiandae? Error odio repudiandae, deleniti facere temporibus quia,
        officiis omnis maiores quisquam nostrum aspernatur, dolor quod amet qui.
        Ducimus adipisci blanditiis nesciunt obcaecati quasi molestiae, sequi a
        consequatur sed, repellendus at expedita est ullam hic reprehenderit ex
        fugiat nemo. Eum vitae quis expedita! Magnam eum possimus assumenda
        asperiores. Dolore sint fugiat, molestiae ab alias, repellat magni
        dignissimos amet illum at mollitia quod voluptas temporibus natus
        tempore cupiditate eveniet minima unde distinctio? Perspiciatis at fuga,
        deserunt dolorem inventore odio? Perspiciatis consequuntur, aperiam
        doloribus repellendus officiis dicta vitae molestias tempore. Earum
        repudiandae, omnis tenetur quod dolor consequuntur ex quas. Dolores,
        neque culpa. Perferendis voluptate aliquid, aspernatur veniam earum
        facilis. Numquam. Fuga dolores qui, alias, minima pariatur hic officiis
        dolore neque exercitationem temporibus, aliquam minus optio harum illo
        quae architecto? Non, assumenda quam asperiores vero aliquid iure iusto
        dolor atque quo. Cum laboriosam delectus explicabo quae corrupti, eius
        illo error itaque dolor molestias repudiandae ad accusantium facilis in
        quasi praesentium commodi, quaerat fugit expedita eveniet neque
        dignissimos? Laborum ipsa earum dolores. Recusandae nisi aut
        necessitatibus molestiae aliquam ipsum quisquam voluptatem omnis autem
        consectetur beatae sapiente fuga, distinctio laborum animi nam ad velit
        dolorum tempore officiis. Quaerat repudiandae asperiores magnam error!
        Odit! Deleniti repellat voluptatum quia iure deserunt suscipit fugiat!
        Quibusdam libero nihil voluptates beatae enim veritatis quae, id culpa
        omnis exercitationem qui, perspiciatis eius deleniti aut odit doloribus
        veniam cumque quis. Soluta molestias tempore id cum tempora illo, cumque
        deleniti aperiam laborum quibusdam mollitia, at ipsam magni doloremque
        quo vel. Expedita omnis deserunt laborum placeat autem architecto,
        perspiciatis esse. Facere, laudantium! Totam, ratione ducimus. Commodi
        laborum eveniet ullam tenetur provident similique, nemo nesciunt sequi
        repellat, delectus optio quos. Expedita fugit magni sapiente voluptates
        veritatis iure, id eum dicta atque sed ipsa. Officia nemo suscipit
        exercitationem accusantium ea corporis vel quibusdam voluptates, enim
        itaque obcaecati fuga quidem illo excepturi quos quod iure, tempora
        minima nobis temporibus omnis? Dolor eos ad deserunt debitis! Et nulla
        corporis aliquam maiores odio deserunt, temporibus, ex dolores voluptate
        voluptas iusto molestiae rerum expedita quis est quibusdam suscipit
        adipisci quo, ipsa rem blanditiis aliquid. Alias doloribus ipsa atque.
        Eos ipsam cupiditate minus iusto totam corrupti ipsum blanditiis.
        Perferendis ut maiores tempora fuga tenetur nihil est consequuntur ab,
        labore dicta ea! Quod deserunt, aut quidem eum quibusdam id aliquid!
        Illum ipsa corporis quia mollitia, nam eligendi possimus est officiis
        quae hic explicabo dolore consectetur, facilis voluptatem exercitationem
        beatae blanditiis voluptate tenetur sunt facere, unde quas? Nam corporis
        praesentium perspiciatis? Voluptatem corporis placeat id quas aliquam
        exercitationem, nulla unde natus eveniet explicabo obcaecati molestiae,
        quidem saepe hic qui numquam? Voluptatem dolor porro rerum inventore
        saepe explicabo, praesentium laborum provident iusto! Deleniti ab ut
        saepe distinctio vero placeat, ducimus incidunt aliquam ipsam mollitia
        numquam quam quo velit repudiandae est cum optio beatae similique,
        labore quod accusantium tempora? Quam impedit quidem natus! Iste eos
        sint alias reiciendis eius ipsum maxime pariatur ullam minima labore
        atque rem porro neque, deleniti fugit optio quae provident voluptatem
        inventore illum! Accusamus aliquid natus eveniet corporis aut! Possimus,
        rerum? Necessitatibus quae, explicabo, tempore saepe harum illum qui
        nihil recusandae temporibus impedit natus aspernatur fugit commodi id
        praesentium eveniet? Minima, necessitatibus. Expedita commodi sit,
        blanditiis quod laboriosam officiis. Fugit, earum assumenda? Earum sed
        voluptatum id vel, ipsum quidem eveniet error ad eum tempora? Adipisci
        architecto earum amet numquam quia necessitatibus cum! Architecto alias
        veniam ratione nesciunt aliquam cupiditate. Nisi inventore, iste quia
        porro recusandae a ea facere deleniti consequuntur officiis, asperiores
        repellendus id maxime earum. In repellat, reiciendis facilis alias
        repellendus saepe incidunt ea corrupti sed accusantium nesciunt? Culpa
        labore ex quo quas natus nam saepe optio assumenda eos, fugit quia et
        officia? Necessitatibus aperiam, delectus numquam similique repellat
        odit dolores temporibus alias tempore reiciendis voluptatum pariatur
        nobis. Sed ipsum quisquam facere, laudantium delectus odio minima
        possimus, voluptatum iusto reprehenderit sunt. Ratione voluptatum,
        necessitatibus saepe neque atque iusto, eius nulla numquam suscipit
        distinctio perferendis accusamus commodi ipsum iste? Sapiente possimus
        officiis asperiores at sint? Odio libero, recusandae doloribus odit non
        cumque eos vero neque repellat esse ducimus dolore harum necessitatibus
        nostrum veniam tenetur sequi possimus hic id ipsa? Atque iste voluptas
        laboriosam porro iusto. Non nihil assumenda culpa voluptas odio
        consequatur, quo totam temporibus exercitationem ipsam quod delectus qui
        corporis illo optio doloribus excepturi hic tempore in laboriosam?
        Nostrum et assumenda deserunt voluptatem. Dignissimos odio a enim.
        Consequuntur molestias, magni quas similique dolorem unde? Excepturi
        mollitia sint assumenda, ea esse optio illo neque ipsa fuga dolor! Modi,
        cum! Totam tempore autem deleniti illum debitis quaerat inventore
        distinctio, maxime magnam. Et deserunt dolorem minus quaerat dolores
        dolore voluptatibus dolor rerum nobis, odit repellat animi incidunt vel
        similique maiores accusamus.
      </footer>
    </div>
  );
}
