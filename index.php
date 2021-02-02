<!-- Inclusion du header se trouvant dans le fichier _partials/header.php -->
<?php
$title = "Mon super index";
include './page/_partials/header.php';
include './page/_partials/menu.php';
?>

<!--Page content -->
    <main>
        <!-- Section 1 -->
        <section>
            Mon contenue en section 1
        </section>

        <!-- Section 2 -->
        <section>
            Mon contenue en section 2
        </section>
    </main>

<?php
include './page/_partials/footer.php';