#!/bin/sh

/share/wait-for-it.sh db:3306

echo "Generating database schema diagram"

/opt/schemacrawler/schemacrawler.sh \
--server=mysql --host=db \
--user=root --password=root \
--database=EnrollmentSys \
--info-level=standard --command=schema \
--output-format=png \
--output-file=/share/task04_diagram.png

echo "Linting schema"

/opt/schemacrawler/schemacrawler.sh \
--server=mysql --host=db \
--user=root --password=root \
--database=EnrollmentSys \
--info-level=standard --command=lint \
--output-format=html \
--output-file=/share/task04_lint.html
