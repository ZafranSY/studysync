#!/usr/bin/perl
 
use strict;
use warnings;
use DBI;
# use JSON::XS;
 
# Connect to the database.
my $database = 'adj2425';
my $user = 'adj2425';
my $pass = 'adj2425';
my $dbh = DBI->connect("DBI:MariaDB:database=$database;host=localhost", $user, $pass, { RaiseError => 1, PrintError => 0 });

my $sth = $dbh->prepare(
    'SELECT * FROM gdlinks'
) or die 'prepare statement failed: ' . $dbh->errstr();

$sth->execute() or die 'execution failed: ' . $dbh->errstr();

print $sth->rows() . " rows found.\n";

#while (my $ref = $sth->fetchrow_hashref()) {
#    print "$ref->{'id_gdlink'}, $ref->{'category'}, $ref->{'ref_name'}\n";
#}

### print as JSON string
