use Mojolicious::Lite;
use DBI;

# Database configuration
my $database = 'adj2425';
my $user = 'adj2425';
my $pass = 'adj2425';
my $dbh = DBI->connect("DBI:MariaDB:database=$database;host=localhost", $user, $pass, { RaiseError => 1, PrintError => 0 });

# Connect to the database
my $dbh = DBI->connect($dhb, $username, $password, { RaiseError => 1, PrintError => 0 });

# Check connection
unless ($dbh) {
    die "Error! Db Not Found";
}

# Example route
get '/' => sub {
    my $c = shift;
    $c->render(text => 'Database connection successful!');
};

app->start;
