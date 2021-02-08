rm -rf **/**/node_modules 
cp -r aula03 aula04
cd aula04

for item in `ls`;
do 
  echo $item
  cd $item
  npm ci --silent
  cd ..
done