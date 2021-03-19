# semantic-versioning-tag
help to process a tag if it follow the semantic versionning pattern.

# usage
```yml
            - name: semantic-versioning-tag
              uses: LongOddCode/semantic-versioning-tag@0.6.0
              id: svt
            
            - name: validation and set params
              run: |
                  echo ${{ steps.svt.outputs.major }}
                  echo ${{ steps.svt.outputs.minor }}
                  echo ${{ steps.svt.outputs.patch }}
                  echo ${{ steps.svt.outputs.prerelease }}
                  echo ${{ steps.svt.outputs.buildmetadata }}

```
